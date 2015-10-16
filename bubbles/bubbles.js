'use strict';

angular.module('bubbleView.view', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view', {
			templateUrl: 'view.html',
			controller: 'ViewCtrl'
		});
	}])

	.controller('ViewCtrl', ['$scope', function ($scope) {
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

			container.setAttribute("style", "font-size:" + neededFontSize + "px;")
		};

		$scope.poke = function () {
			alert("Poke!");
		};



//In order to scale the bubble view you can mess with the font-size style on the bubble-container div. Default is 16px
//In order to calculate the right font-size: take the current height and divide by 37 (number of em's from top to bottom with all circles shown.
	}]);