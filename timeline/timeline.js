//This is the height of the ruler looking part
var rulerHeight = 100;

var rulerYearGap = 60;

//Link in the css for the timeline
var link = document.createElement( "link" );
link.href = "timeline.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "all";

document.getElementsByTagName( "head" )[0].appendChild( link );

//Utility function used to draw an event onto the timeline
function addEvent(ctx, event) {

}

//Utility function used to draw a line on the canvas
function drawLine(ctx, startX, startY, endX, endY, color, lineWidth) {
	ctx.beginPath();
	if (lineWidth) {
		ctx.lineWidth = "" + lineWidth + "";
	}
	if (color) {
		ctx.strokeStyle = color;
	}
	ctx.moveTo(startX, startY);
	ctx.lineTo(endX, endY);
	ctx.stroke();
}

//Utility function used to draw text on the canvas
function drawText(ctx, x, y, text, font, color) {
	ctx.font = font;
	ctx.textAlign = "center";
	if (color) {
		ctx.fillStyle = color;
	}
	else {
		ctx.fillStyle = "black";
	}
	ctx.fillText(text,x,y);
}

//This draws the timeline at the bottom.
function drawTimeLine() {
	// Initial Values
	// These are currently hard set. They will eventually be calculated from the given data.
	var split_time = 5;
	var start_year = 1800;
	var end_year = 2000;
	var time_gap = (end_year - start_year);
	var required_width = (time_gap / split_time) * (rulerYearGap + 2);

	var container = document.getElementById("container");

	var max_height = container.clientHeight;
	//var max_width = container.clientWidth;

	var storyDiv = document.createElement('div');
	storyDiv.id = 'storyBoard';
	storyDiv.setAttribute('style', "height:" + (max_height - 150) + "px;background:red;background: linear-gradient(to right, red , blue);");
	container.appendChild(storyDiv);

	var canvasDiv = document.createElement('div');
	canvasDiv.id = 'canvas-div';
	canvasDiv.setAttribute('class', "canvas-div");
	container.appendChild(canvasDiv);

	var canvas = document.createElement('canvas');
	canvas.id = 'myCanvas';
	canvasDiv.appendChild(canvas);

	var c = document.getElementById("myCanvas");

	c.width = required_width;
	c.height = rulerHeight;

	var ctx = c.getContext("2d");

	//---Draw bottom line for ruler---//
	drawLine(ctx, 0, rulerHeight-15, required_width, rulerHeight-15);

	//---Draw main lines---//
	var temp_val = rulerYearGap;

	var time = start_year;

	while (time <= end_year) {
		drawLine(ctx, temp_val, rulerHeight-65, temp_val, rulerHeight-15);
		//---Draw Labels---//
		drawText(ctx, temp_val, rulerHeight, "" + time + "", "15px Arial");
		time += split_time;
		temp_val += rulerYearGap;
	}

	//---Draw middle lines---//
	temp_val = rulerYearGap/5;

	while (temp_val < required_width) {
		drawLine(ctx, temp_val, rulerHeight-35, temp_val, rulerHeight-15, "gray");
		temp_val += rulerYearGap/5;
	}
}

window.onresize = function() {
	var elem = document.getElementById("storyBoard");
	elem.parentNode.removeChild(elem);

	elem = document.getElementById("canvas-div");
	elem.parentNode.removeChild(elem);

	drawTimeLine();
};

window.onload = function() {
	drawTimeLine();
};