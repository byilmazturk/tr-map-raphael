window.onload = function () {
	var R = Raphael("turkey", 1024, 500);
	R.rect(0, 0, 1024, 500, 0).attr({
        stroke: "none",
        fill: "0-#9bb7cb-#adc8da"
    });
	var attr = {
		"fill": "#d3d3d3",
		"stroke": "#fff",
		"stroke-opacity": "1",
		"stroke-linejoin": "round",
		"stroke-miterlimit": "4",
		"stroke-width": "1.0",
		"stroke-dasharray": "none"
	};
	var mPaths = turkeyMap.paths; 
	for (var state in mPaths) {
		R.path(mPaths[state]).attr(attr);
	}
};
