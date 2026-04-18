const sampleData = {
	labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	values: [42, 55, 38, 61, 73, 88, 64],
};

const total = sampleData.values.reduce((sum, n) => sum + n, 0);

const kpiEl = document.getElementById("kpi-waffles");
animateCount(kpiEl, total, 800);

new Chart(document.getElementById("wafflesChart"), {
	type: "bar",
	data: {
		labels: sampleData.labels,
		datasets: [{
			label: "Waffles",
			data: sampleData.values,
			backgroundColor: "#0d9488",
			borderRadius: 6,
		}],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: { legend: { display: false } },
		scales: {
			y: { beginAtZero: true, ticks: { precision: 0 } },
		},
	},
});

function animateCount(el, target, durationMs) {
	const start = performance.now();
	function tick(now) {
		const progress = Math.min((now - start) / durationMs, 1);
		el.textContent = Math.round(target * progress).toLocaleString();
		if (progress < 1) requestAnimationFrame(tick);
	}
	requestAnimationFrame(tick);
}
