'use strict';

angular.module('bubbleView.view', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view', {
			templateUrl: 'view.html',
			controller: 'ViewCtrl'
		});
	}])

	.controller('ViewCtrl', ['$scope', function ($scope) {
		var fontAwesomeIcons = [
			{"name":"fonticons",       "icon":"fa-fonticons"},
			{"name":"sticky-note",     "icon":"fa-sticky-note"},
			{"name":"map-signs",       "icon":"fa-map-signs"},
			{"name":"sticky-note-o",   "icon":"fa-sticky-note-o"},
			{"name":"commenting",      "icon":"fa-commenting"},
			{"name":"map",             "icon":"fa-map"},
			{"name":"commenting-o",    "icon":"fa-commenting-o"},
			{"name":"map-o",           "icon":"fa-map-o"},
			{"name":"wikipedia-w",     "icon":"fa-wikipedia-w"},
			{"name":"camera",          "icon":"fa-camera"},
			{"name":"envelope",        "icon":"fa-envelope"},
			{"name":"filter",          "icon":"fa-filter"},
			{"name":"globe",           "icon":"fa-globe"},
			{"name":"heartbeat",       "icon":"fa-heartbeat"},
			{"name":"lightbulb-o",     "icon":"fa-lightbulb-o"},
			{"name":"microphone",      "icon":"fa-microphone"},
			{"name":"question",        "icon":"fa-question"},
			{"name":"remove",          "icon":"fa-remove"},
			{"name":"sign-out",        "icon":"fa-sign-out"},
			{"name":"television",      "icon":"fa-television"},
			{"name":"unlock",          "icon":"fa-unlock"},
			{"name":"user",            "icon":"fa-user"},
			{"name":"users",           "icon":"fa-users"},
			{"name":"automobile",      "icon":"fa-automobile"},
			{"name":"bell",            "icon":"fa-bell"},
			{"name":"briefcase",       "icon":"fa-briefcase"},
			{"name":"graduation-cap",  "icon":"fa-graduation-cap"},
			{"name":"male",            "icon":"fa-male"},
			{"name":"question-circle", "icon":"fa-question-circle"},
			{"name":"road",            "icon":"fa-road"},
			{"name":"search",          "icon":"fa-search"},
			{"name":"book",            "icon":"fa-book"},
			{"name":"calendar",        "icon":"fa-calendar"},
			{"name":"spinner",         "icon":"fa-spinner"},
			{"name":"trophy",          "icon":"fa-trophy"},
			{"name":"asterisk",        "icon":"fa-asterisk"},
			{"name":"birthday-cake",   "icon":"fa-birthday-cake"},
			{"name":"lock",            "icon":"fa-lock"},
			{"name":"photo",           "icon":"fa-photo"},
			{"name":"file-text",       "icon":"fa-file-text"},
			{"name":"file-text-o",     "icon":"fa-file-text-o"},
			{"name":"arrow-left",      "icon":"fa-arrow-left"},
			{"name":"hand-o-left",     "icon":"fa-hand-o-left"},
			{"name":"link",            "icon":"fa-link"}
		];

		//Calculate the font-size for the view
		var container = document.getElementById("bubble-container");
		var body = document.body,
			html = document.documentElement;

		var height = Math.max( body.scrollHeight, body.offsetHeight,
			html.clientHeight, html.scrollHeight, html.offsetHeight );

		var neededFontSize = Math.floor(height/37);
		container.setAttribute("style", "font-size:" + neededFontSize + "px;")

		window.onresize = function () {
			height = Math.max( body.scrollHeight, body.offsetHeight,
				html.clientHeight, html.scrollHeight, html.offsetHeight );

			var neededFontSize = Math.floor(height/37);

			container.setAttribute("style", "font-size:" + neededFontSize + "px;");
		};

		var hasBackground = false;

		var fontAwesomeIndex = 0;

		$scope.poke = function (num) {
			switch (num) {
				case 0:
					var centerDiv = document.getElementById("centerDiv");
					if (!hasBackground) {
						centerDiv.setAttribute("style", "background-image:url('http://www.online-image-editor.com//styles/2014/images/example_image.png')");
					}
					else {
						centerDiv.setAttribute("style", "background-image:url('http://dreamatico.com/data_images/kitten/kitten-7.jpg')");
					}
					hasBackground = !hasBackground;
					//$scope.bubble1 = true;
					//$scope.bubble2 = true;
					//$scope.bubble3 = true;
					//$scope.bubble4 = true;
					//$scope.bubble5 = true;
					//$scope.bubble6 = true;
					//$scope.bubble7 = true;
					//$scope.bubble8 = true;
					break;
				case 1:
					$scope.bubble1Icon = fontAwesomeIcons[fontAwesomeIndex].icon;
					$scope.bubble1Text = fontAwesomeIcons[fontAwesomeIndex].name;
					//$scope.bubble1 = false;
					break;
				case 2:
					$scope.bubble2Icon = fontAwesomeIcons[fontAwesomeIndex].icon;
					$scope.bubble2Text = fontAwesomeIcons[fontAwesomeIndex].name;
					//$scope.bubble2 = false;
					break;
				case 3:
					$scope.bubble3Icon = fontAwesomeIcons[fontAwesomeIndex].icon;
					$scope.bubble3Text = fontAwesomeIcons[fontAwesomeIndex].name;
					//$scope.bubble3 = false;
					break;
				case 4:
					$scope.bubble4Icon = fontAwesomeIcons[fontAwesomeIndex].icon;
					$scope.bubble4Text = fontAwesomeIcons[fontAwesomeIndex].name;
					//$scope.bubble4 = false;
					break;
				case 5:
					$scope.bubble5Icon = fontAwesomeIcons[fontAwesomeIndex].icon;
					$scope.bubble5Text = fontAwesomeIcons[fontAwesomeIndex].name;
					//$scope.bubble5 = false;
					break;
				case 6:
					$scope.bubble6Icon = fontAwesomeIcons[fontAwesomeIndex].icon;
					$scope.bubble6Text = fontAwesomeIcons[fontAwesomeIndex].name;
					//$scope.bubble6 = false;
					break;
				case 7:
					$scope.bubble7Icon = fontAwesomeIcons[fontAwesomeIndex].icon;
					$scope.bubble7Text = fontAwesomeIcons[fontAwesomeIndex].name;
					//$scope.bubble7 = false;
					break;
				case 8:
					$scope.bubble8Icon = fontAwesomeIcons[fontAwesomeIndex].icon;
					$scope.bubble8Text = fontAwesomeIcons[fontAwesomeIndex].name;
					//$scope.bubble8 = false;
					break;
			}
			fontAwesomeIndex++;
			if (fontAwesomeIndex >= fontAwesomeIcons.length) {
				fontAwesomeIndex = 0;
			}
		};

		$scope.bubble1 = true;
		$scope.bubble2 = true;
		$scope.bubble3 = true;
		$scope.bubble4 = true;
		$scope.bubble5 = true;
		$scope.bubble6 = true;
		$scope.bubble7 = true;
		$scope.bubble8 = true;

		$scope.bubble1Icon = "fa-lightbulb-o";
		$scope.bubble1Text = "lightbulb-o";
		$scope.bubble2Icon = "fa-map-o";
		$scope.bubble2Text = "map-o";
		$scope.bubble3Icon = "fa-music";
		$scope.bubble3Text = "music";
		$scope.bubble4Icon = "fa-book";
		$scope.bubble4Text = "book";
		$scope.bubble5Icon = "fa-bomb";
		$scope.bubble5Text = "bomb";
		$scope.bubble6Icon = "fa-bell";
		$scope.bubble6Text = "bell";
		$scope.bubble7Icon = "fa-car";
		$scope.bubble7Text = "car";
		$scope.bubble8Icon = "fa-briefcase";
		$scope.bubble8Text = "briefcase";

//In order to scale the bubble view you can mess with the font-size style on the bubble-container div. Default is 16px
//In order to calculate the right font-size: take the current height and divide by 37 (number of em's from top to bottom with all circles shown.
	}]);