window.onload = window.onresize = function () {
	var container = document.getElementById("bubble-container");

	var body = document.body,
		html = document.documentElement;

	var height = Math.max( body.scrollHeight, body.offsetHeight,
		html.clientHeight, html.scrollHeight, html.offsetHeight );

	var neededFontSize = Math.floor(height/37);

	container.setAttribute("style", "font-size:" + neededFontSize + "px;")
};

//In order to scale the bubble view you can mess with the font-size style on the bubble-container div. Default is 16px
//In order to calculate the right font-size: take the current height and divide by 37 (number of em's from top to bottom with all circles shown.)