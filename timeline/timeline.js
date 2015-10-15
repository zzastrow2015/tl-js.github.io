var timeline = (function () {
	var tl = {};

	//This is the height of the ruler looking part
	var rulerHeight = 125;

	var rulerYearGap = 60;

	var initialized = 0;

	var data = {};

	// Initial Values
	var split_time = 10;
	var start_year = 1800;
	var end_year = 2000;
	var time_gap = (end_year - start_year);
	var required_width = (Math.ceil(time_gap / split_time) + 2) * rulerYearGap;

	function loadCSSIfNotAlreadyLoaded() {
		var ss = document.styleSheets;
		for (var i = 0, max = ss.length; i < max; i++) {
			if (ss[i].href == "timeline.css")
				return;
		}
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "timeline.css";

		document.getElementsByTagName("head")[0].appendChild(link);
	}

	//Link in the css for the timeline
	loadCSSIfNotAlreadyLoaded();

	function calculateXValueForEvent(date) {
		var yearVal = (((date.year - start_year)/split_time) + 1) * rulerYearGap;
		var dayVal = date.day;

		//Add all days from the previous month
		if (date.month >= 1) { //January

		}
		if (date.month >= 2) { //February
			dayVal += 31;
		}
		if (date.month >= 3) { //March
			dayVal += 28;
		}
		if (date.month >= 4) { //April
			dayVal += 31;
		}
		if (date.month >= 5) { //May
			dayVal += 30;
		}
		if (date.month >= 6) { //June
			dayVal += 31;
		}
		if (date.month >= 7) { //July
			dayVal += 30;
		}
		if (date.month >= 8) { //August
			dayVal += 31;
		}
		if (date.month >= 9) { //September
			dayVal += 31;
		}
		if (date.month >= 10) { //October
			dayVal += 30;
		}
		if (date.month >= 11) { //November
			dayVal += 31;
		}
		if (date.month >= 12) { //December
			dayVal += 30;
		}

		dayVal = (dayVal/365)*(rulerYearGap/split_time);

		console.log(yearVal + dayVal);

		return yearVal + dayVal;
	}

	//Utility function used to draw an event onto the timeline
	function addEvent(ctx, event) {
		//TODO: Add the ability for events to be moved to a lower level
		var addDistance = calculateXValueForEvent(event.date);
		drawCircle(ctx, addDistance, rulerHeight-20, 4,"rgba(0,0,0,.75)");

		drawLine(ctx, addDistance, rulerHeight-20, addDistance, 10, "rgba(0,0,0,.75)", 2);

		drawRect(ctx, addDistance, 10, addDistance+60, 35, "red");
		drawText(ctx, addDistance+30, 30, event.title, "15px Arial");

		/*Need to add a clickable area for the event
		*The div will have:
		 *  left = addDistance
		 *  top = 10
		 *  width = 60
		 *  height = 35-10
		*/
	}

	//Utility function used to draw a circle on the canvas
	function drawCircle(ctx, centerX, centerY, radius, color, notFilled) {
		ctx.beginPath();
		ctx.arc(centerX, centerY, radius, 0, Math.PI*2, true);
		ctx.closePath();
		if (color) {
			if (notFilled) {
				ctx.strokeStyle = color;
			}
			else {
				ctx.fillStyle = color;
			}
		}
		else {
			ctx.strokeStyle = "black";
			ctx.fillStyle = "black";
		}
		if (notFilled) {
			ctx.stroke();
		}
		else {
			ctx.fill();
		}
	}

	//Utility function used to draw a rectangle on the canvas
	function drawRect(ctx, topX, topY, bottomX, bottomY, color, notFilled, lineWidth) {
		var width = bottomX - topX;
		var height = bottomY - topY;

		if (notFilled) {
			if (color) {
				ctx.strokeStyle = color;
			}
			else {
				fillStyle = "black";
			}
			if (lineWidth) {
				ctx.lineWidth = "" + lineWidth + "";
			}
			ctx.rect(topX, topY, width, height);
		}
		else {
			if (color) {
				ctx.fillStyle = color;
			}
			else {
				ctx.fillStyle = "black";
			}
			ctx.fillRect(topX, topY, width, height);
		}
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
		else {
			ctx.strokeStyle = "black";
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
		if (!initialized) {
			alert("You need to call init before you can create the timeline.");
			return;
		}

		var container = document.getElementById("container");

		var max_height = container.clientHeight;
		//var max_width = container.clientWidth;

		var storyDiv = document.createElement('div');
		storyDiv.id = 'storyBoard';
		storyDiv.setAttribute('style', "height:" + (max_height - rulerHeight) + "px;background:red;background: linear-gradient(to right, red , blue);");
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

		drawRect(ctx, 0, 0, required_width, rulerHeight, "white");

		//---Draw bottom line for ruler---//
		drawLine(ctx, 0, rulerHeight-20, required_width, rulerHeight-20);

		//---Draw main lines---//
		var temp_val = rulerYearGap;

		var time = start_year;

		while (time <= end_year) {
			drawLine(ctx, temp_val, rulerHeight-40, temp_val, rulerHeight-20);
			//---Draw Labels---//
			drawText(ctx, temp_val, rulerHeight-5, "" + time + "", "15px Arial");
			time += split_time;
			temp_val += rulerYearGap;
		}

		//---Draw middle lines---//
		temp_val = rulerYearGap/5;

		while (temp_val < required_width) {
			drawLine(ctx, temp_val, rulerHeight-30, temp_val, rulerHeight-20, "gray");
			temp_val += rulerYearGap/5;
		}

		for (var i in data) {
			addEvent(ctx, data[i]);
		}
	}

	tl.createTimeline = function() {
		drawTimeLine();
	};

	tl.reloadTimeline = function() {
		if (!initialized) {
			alert("You need to call init before you can create the timeline.");
			return;
		}

		var elem = document.getElementById("storyBoard");
		elem.parentNode.removeChild(elem);

		elem = document.getElementById("canvas-div");
		elem.parentNode.removeChild(elem);

		drawTimeLine();
	};

	tl.init = function(container, events, options) {
		//TODO: Need to add security here to check for valid input.

		if (!initialized) {
			initialized = 1;
		}

		function sortByDate(a,b) {
			if (a.date.year < b.date.year) {
				return -1;
			}
			else if (a.date.year > b.date.year) {
				return 1;
			}
			else if (a.date.year == b.date.year) {
				if (a.date.month < b.date.year) {
					return -1;
				}
				else if (a.date.month > b.date.month) {
					return 1;
				}
				else if (a.date.month == b.date.month) {
					if (a.date.day < b.date.day) {
						return -1;
					}
					else if (a.date.day > b.date.day) {
						return 1;
					}
				}
			}
			return 0;
		}

		data = events.sort(sortByDate);

		start_year = data[0].date.year;
		end_year= data[data.length-1].date.year;

		time_gap = (end_year - start_year);
		//The +2 is so that it has the extra space at the front and back of the line
		required_width = (Math.ceil(time_gap / split_time) + 2) * rulerYearGap;
	};

	return tl;
}());

/***********************************************************************************************
* Everything below this line is not part of the api, but is calls to the api to create the page.
************************************************************************************************/

var container_name = "container";

var events = [
	{
		"date":{
			"year":1600,
			"day":21,
			"month":4
		},
		"title": "Event 1",
		"description": "Event 1 Description"
	},
	{
		"date":{
			"year":2000,
			"day":12,
			"month":3
		},
		"title": "Event 2",
		"description": "Event 2 Description"
	},
	{
		"date":{
			"year":1900,
			"day":15,
			"month":3
		},
		"title": "Event 3",
		"description": "Event 3 Description"
	},
	{
		"date":{
			"year":1600,
			"day":20,
			"month":11
		},
		"title": "Event 4",
		"description": "Event 4 Description"
	}
];

var options = {
	"1": "Hello",
	"2": "Goodbye"
};

timeline.init(container_name, events, options);

window.onresize = function() {
	timeline.reloadTimeline();
};

window.onload = function() {
	timeline.createTimeline();
};