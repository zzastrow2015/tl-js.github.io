'use strict';

angular.module('bubbleView.view', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view', {
			templateUrl: 'view.html',
			controller: 'ViewCtrl'
		});
	}])

	.controller('ViewCtrl', ['$scope', function ($scope) {
		function getItemNumFromID(id) {
			for (var i = 0; i < testData.length; i++) {
				if (testData[i].id == id) {
					return i;
				}
			}
			return -1;
		}

		function initializeView(item) {
			var centerDiv = document.getElementById("centerDiv");
			if (item.pictureUrl != "") {
				centerDiv.setAttribute("style", "background-image:url('" + item.pictureUrl + "')");
			}
			$scope.centerBubbleText = item.text;
			var linkAmount = item.links.length;
			var startDegree;
			var degreeSpacing = 0;
			switch (linkAmount) {
				case 1:
					startDegree = 0;
					break;
				case 2:
					startDegree = 0;
					break;
				case 3:
					startDegree = 60;
					break;
				case 4:
					startDegree = 45;
					//startDegree = 0;
					break;
				case 5:
					startDegree = 54; //The extra one will be at angle 270 (top)
					//startDegree = 18; //The extra one will be at angle 90 (bottom)
					break;
				case 6:
					startDegree = 0; //symmetric about the y
					//startDegree = 30; //symmetric about the x
					break;
				case 7:
					startDegree = 39; //The extra one will be at the bottom
					//startDegree = 15; //The extra one will be at the top
					break;
				case 8:
					startDegree = 23; //There are 2 bubbles in each quadrant
					//startDegree = 0; //There are 4 on the axes and 4 in the quadrants
					break;
				case 9:
					startDegree = 10; //The extra one will be at the bottom
					//startDegree = 30; //The extra one will be at the top
					break;
				default:
					startDegree = 0;
					break;
			}

			if (linkAmount != 0) {
				degreeSpacing = Math.floor(360/linkAmount);
			}

			$scope.bubble1 = false;
			$scope.bubble2 = false;
			$scope.bubble3 = false;
			$scope.bubble4 = false;
			$scope.bubble5 = false;
			$scope.bubble6 = false;
			$scope.bubble7 = false;
			$scope.bubble8 = false;
			$scope.bubble9 = false;

			if (linkAmount > 0) {
				$scope.bubble1 = true;
			}
			if (linkAmount > 1) {
				$scope.bubble2 = true;
			}
			if (linkAmount > 2) {
				$scope.bubble3 = true;
			}
			if (linkAmount > 3) {
				$scope.bubble4 = true;
			}
			if (linkAmount > 4) {
				$scope.bubble5 = true;
			}
			if (linkAmount > 5) {
				$scope.bubble6 = true;
			}
			if (linkAmount > 6) {
				$scope.bubble7 = true;
			}
			if (linkAmount > 7) {
				$scope.bubble8 = true;
			}
			if (linkAmount > 8) {
				$scope.bubble9 = true;
			}

			var newBubbles = [];
			var degree = startDegree;
			var bubbleNum = 0;
			for (var i in item.links) {
				var link = item.links[i];
				newBubbles.push({
					"id":++bubbleNum,
					"icon":link.icon,
					"text":link.text,
					"linkID":link.linkID,
					"class":"deg-" + degree,
					"linkUrl":(link.linkUrl ? link.linkUrl : "")
				});
				degree += degreeSpacing;
			}

			$scope.bubbles = newBubbles;
		}

		var testData = [
			{
				"id":0,
				"text":"Murder Cat",
				"pictureUrl":"http://www.online-image-editor.com//styles/2014/images/example_image.png",
				"links": [
					{
						"linkID":1,
						"icon":"fa-link",
						"text":"Associated"
					},
					{
						"linkID":-1,
						"icon":"fa-lightbulb-o",
						"text":"Invention"
					},
					{
						"linkID":-2,
						"icon":"fa-photo",
						"text":"Photos",
						"linkUrl":"http://www.google.com"
					},
					{
						"linkID":-1,
						"icon":"fa-globe",
						"text":"Map"
					},
					{
						"linkID":-2,
						"icon":"fa-birthday-cake",
						"text":"Birthday",
						"linkUrl":"http://www.reddit.com"
					},
					{
						"linkID":-1,
						"icon":"fa-calendar",
						"text":"Schedule"
					},
					{
						"linkID":-1,
						"icon":"fa-envelope",
						"text":"Letters"
					},
					{
						"linkID":-1,
						"icon":"fa-music",
						"text":"Scores"
					}
				]
			},
			{
				"id":1,
				"text":"Hope Cat",
				"pictureUrl":"http://dreamatico.com/data_images/kitten/kitten-7.jpg",
				"links":[
					{
						"linkID":0,
						"icon":"fa-link",
						"text":"Associated"
					},
					{
						"linkID":-1,
						"icon":"fa-lightbulb-o",
						"text":"Invention"
					},
					{
						"linkID":-2,
						"icon":"fa-photo",
						"text":"Photos",
						"linkUrl":"http://www.google.com"
					},
					{
						"linkID":-1,
						"icon":"fa-globe",
						"text":"Map"
					},
					{
						"linkID":-2,
						"icon":"fa-birthday-cake",
						"text":"Birthday",
						"linkUrl":"http://www.reddit.com"
					},
					{
						"linkID":-1,
						"icon":"fa-calendar",
						"text":"Schedule"
					}
				]
			}
		];

		//Calculate the font-size for the view
		var container = document.getElementById("bubble-container");
		var body = document.body,
			html = document.documentElement;

		var height = Math.max( body.scrollHeight, body.offsetHeight,
			html.clientHeight, html.scrollHeight, html.offsetHeight );

		var neededFontSize = Math.floor(height/37);
		container.setAttribute("style", "font-size:" + neededFontSize + "px;");

		window.onresize = function () {
			height = Math.max( body.scrollHeight, body.offsetHeight,
				html.clientHeight, html.scrollHeight, html.offsetHeight );

			var neededFontSize = Math.floor(height/37);

			container.setAttribute("style", "font-size:" + neededFontSize + "px;");
		};

		var currentBubble;
		var gotoId;

		$scope.poke = function (num) {
			switch (num) {
				case 0:
					break;
				case 1:
					currentBubble = $scope.bubbles[0];
					if (currentBubble.linkID == -2) {
						window.open(currentBubble.linkUrl, '_blank');
					}

					if (currentBubble.linkID >= 0) {
						gotoId = getItemNumFromID(currentBubble.linkID);
						if (gotoId >= 0) {
							initializeView(testData[gotoId]);
						}
					}
					break;
				case 2:
					currentBubble = $scope.bubbles[1];
					if (currentBubble.linkID == -2) {
						window.open(currentBubble.linkUrl, '_blank');
					}

					if (currentBubble.linkID >= 0) {
						gotoId = getItemNumFromID(currentBubble.linkID);
						if (gotoId >= 0) {
							initializeView(testData[gotoId]);
						}
					}
					break;
				case 3:
					currentBubble = $scope.bubbles[2];
					if (currentBubble.linkID == -2) {
						window.open(currentBubble.linkUrl, '_blank');
					}

					if (currentBubble.linkID >= 0) {
						gotoId = getItemNumFromID(currentBubble.linkID);
						if (gotoId >= 0) {
							initializeView(testData[gotoId]);
						}
					}
					break;
				case 4:
					currentBubble = $scope.bubbles[3];
					if (currentBubble.linkID == -2) {
						window.open(currentBubble.linkUrl, '_blank');
					}

					if (currentBubble.linkID >= 0) {
						gotoId = getItemNumFromID(currentBubble.linkID);
						if (gotoId >= 0) {
							initializeView(testData[gotoId]);
						}
					}
					break;
				case 5:
					currentBubble = $scope.bubbles[4];
					if (currentBubble.linkID == -2) {
						window.open(currentBubble.linkUrl, '_blank');
					}

					if (currentBubble.linkID >= 0) {
						gotoId = getItemNumFromID(currentBubble.linkID);
						if (gotoId >= 0) {
							initializeView(testData[gotoId]);
						}
					}
					break;
				case 6:
					currentBubble = $scope.bubbles[5];
					if (currentBubble.linkID == -2) {
						window.open(currentBubble.linkUrl, '_blank');
					}

					if (currentBubble.linkID >= 0) {
						gotoId = getItemNumFromID(currentBubble.linkID);
						if (gotoId >= 0) {
							initializeView(testData[gotoId]);
						}
					}
					break;
				case 7:
					currentBubble = $scope.bubbles[6];
					if (currentBubble.linkID == -2) {
						window.open(currentBubble.linkUrl, '_blank');
					}

					if (currentBubble.linkID >= 0) {
						gotoId = getItemNumFromID(currentBubble.linkID);
						if (gotoId >= 0) {
							initializeView(testData[gotoId]);
						}
					}
					break;
				case 8:
					currentBubble = $scope.bubbles[7];
					if (currentBubble.linkID == -2) {
						window.open(currentBubble.linkUrl, '_blank');
					}

					if (currentBubble.linkID >= 0) {
						gotoId = getItemNumFromID(currentBubble.linkID);
						if (gotoId >= 0) {
							initializeView(testData[gotoId]);
						}
					}
					break;
				case 9:
					currentBubble = $scope.bubbles[8];
					if (currentBubble.linkID == -2) {
						window.open(currentBubble.linkUrl, '_blank');
					}

					if (currentBubble.linkID >= 0) {
						gotoId = getItemNumFromID(currentBubble.linkID);
						if (gotoId >= 0) {
							initializeView(testData[gotoId]);
						}
					}
					break;
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
		$scope.bubble9 = true;

		$scope.bubbles = [
			{
				"id":1,
				"icon":"fa-lightbulb-o",
				"text":"lightbulb",
				"class":"deg-10"
			},
			{
				"id":2,
				"icon":"fa-map-o",
				"text":"map",
				"class":"deg-50"
			},
			{
				"id":3,
				"icon":"fa-music",
				"text":"music",
				"class":"deg-90"
			},
			{
				"id":4,
				"icon":"fa-book",
				"text":"book",
				"class":"deg-130"
			},
			{
				"id":5,
				"icon":"fa-globe",
				"text":"globe",
				"class":"deg-170"
			},
			{
				"id":6,
				"icon":"fa-bell",
				"text":"bell",
				"class":"deg-210"
			},
			{
				"id":7,
				"icon":"fa-map-pin",
				"text":"map pin",
				"class":"deg-250"
			},
			{
				"id":8,
				"icon":"fa-briefcase",
				"text":"briefcase",
				"class":"deg-290"
			},
			{
				"id":9,
				"icon":"fa-user",
				"text":"person",
				"class":"deg-330"
			}
		];

		initializeView(testData[0]);
	}]);