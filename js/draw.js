window.onload = function () {
	var R = Raphael("turkey", 1024, 500);
	R.rect(0, 0, 1024, 500, 0).attr({
        stroke: "none",
        fill: "0-#9bb7cb-#adc8da"
    });
	var attr = {
		"fill": "#d3d3d3",
		"stroke": "#000",
		"stroke-opacity": "1",
		"stroke-linejoin": "round",
		"stroke-miterlimit": "4",
		"stroke-width": "1.0",
		"stroke-dasharray": "none"
	};
	
	mPaths = turkeyMap.paths;
	mRaphael = {};
	
	for (var province in mPaths) {
		mRaphael[province] = R.path(mPaths[province]).attr(attr);
	}
	
    for (var province in mRaphael) {
    	mRaphael[province].color = Raphael.getColor();
        
        (function (pr, province) {
          pr[0].style.cursor = "pointer";
          pr[0].onmouseover = function () {
        	  pr.animate({fill: pr.color}, 500);
        	  pr.toFront();
          };
          pr[0].onmouseout = function () {
        	  pr.animate({fill: "#d3d3d3"}, 500);
        	  pr.toFront();
          };
                     
        })(mRaphael[province], province);
      }
};
