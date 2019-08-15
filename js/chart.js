google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawAxisTickColors);
function drawAxisTickColors() {
	var label1 = input_group1.value;
	var label2 = input_group2.value;
	var label3 = input_group3.value;
	console.log(label1);
	if (groups == 3) {
		var data = google.visualization.arrayToDataTable([["Group", "Count", { role: "style" }], [label1, tigercount, "red"], [label2, hippocount, "blue"], [label3, monkeycount, "green"]]);
	} else {
		var data = google.visualization.arrayToDataTable([["Group", "Count", { role: "style" }], [label1, tigercount, "red"], [label2, hippocount, "blue"]]);
	}

	var options = {
		legend: "none",
		vAxis: { format: "0" }
	};

	var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
	chart.draw(data, options);
}
