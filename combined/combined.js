'use strict';

angular.module('combinedApp.view', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view', {
			templateUrl: 'view.html',
			controller: 'ViewCtrl'
		});
	}])

	.controller('ViewCtrl', ['$scope', '$location', function ($scope, $location) {
		var container = document.getElementById("container");
		var search_box = document.getElementById("search-box");
		var main_section = document.getElementById("main-section");
		var focus_point = document.getElementById("focus-point");
		var list_container = document.getElementById("list-container");
		var html = document.documentElement;
		var height = html.clientHeight;

		list_container.setAttribute("style", "max-height:" + (height - 50) + "px");
		main_section.setAttribute("style", "height:" + (height - 35) + "px");
		focus_point.setAttribute("style", "height:" + (height - 35 - 20 - 25) + "px");
		search_box.setAttribute("style", "height:" + height + "px");
		container.setAttribute("style", "height:" + height + "px");

		window.onresize = function () {
			height = html.clientHeight;

			list_container.setAttribute("style", "max-height:" + (height - 50) + "px");
			main_section.setAttribute("style", "height:" + (height - 35) + "px");
			focus_point.setAttribute("style", "height:" + (height - 35 - 20 - 25) + "px");
			search_box.setAttribute("style", "height:" + height + "px");
			container.setAttribute("style", "height:" + height + "px");
		};

		$scope.currentYear = 1900;

		$scope.allEvents = [
			'fa-automobile',
			'fa-bank',
			'fa-birthday-cake',
			'fa-book',
			'fa-briefcase',
			'fa-building',
			'fa-building-o',
			'fa-cab',
			'fa-calculator',
			'fa-calendar',
			'fa-calendar-check-o',
			'fa-calendar-minus-o',
			'fa-calendar-o',
			'fa-calendar-plus-o',
			'fa-calendar-times-o',
			'fa-camera',
			'fa-car',
			'fa-cog',
			'fa-comment',
			'fa-comment-o',
			'fa-commenting',
			'fa-commenting-o',
			'fa-comments',
			'fa-comments-o',
			'fa-compass',
			'fa-desktop',
			'fa-envelope',
			'fa-envelope-o',
			'fa-eye',
			'fa-female',
			'fa-flag',
			'fa-flag-checkered',
			'fa-flag-o',
			'fa-globe',
			'fa-graduation-cap',
			'fa-home',
			'fa-industry',
			'fa-legal',
			'fa-lightbulb-o',
			'fa-lock',
			'fa-magic',
			'fa-male',
			'fa-map',
			'fa-map-marker',
			'fa-map-o',
			'fa-map-pin',
			'fa-map-signs',
			'fa-microphone',
			'fa-music',
			'fa-paw',
			'fa-phone',
			'fa-photo',
			'fa-question',
			'fa-television',
			'fa-trademark',
			'fa-trophy',
			'fa-university',
			'fa-unlock',
			'fa-unlock-alt',
			'fa-user',
			'fa-users',
			'fa-warning',
			'fa-youtube-play'
		];

		$scope.startYear = 1800;
		$scope.endYear = 2000;

		$scope.lowerBound = $scope.startYear;
		$scope.upperBound = $scope.endYear;

		$( "#slider-range" ).slider({
			range: true,
			min: $scope.startYear,
			max: $scope.endYear,
			values: [ $scope.lowerBound, $scope.upperBound ],
			change: function( event, ui ) {
				updateYears(ui.values);
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});

		var float_year = document.getElementById("floating-year");

		function updateFloatYearValue () {
			var leftString = float_year.style.left;
			var leftValue = (parseInt(leftString.replace(/\D/g,'')) - 250);
			var totalYearWidth = (html.clientWidth - 35) - 250;
			$scope.currentYear = Math.floor((leftValue/totalYearWidth) * ($scope.upperBound - $scope.lowerBound) + $scope.lowerBound);
			$scope.$apply();
		}

		function updateYears (values) {
			$scope.lowerBound = values[0];
			$scope.upperBound = values[1];
			$scope.$apply();
		}

		$("#focus-point").mousemove(function(event){
			var leftValue = (event.pageX - 18);
			if (leftValue < 250) {
				leftValue = 250;
			}
			if (leftValue > (html.clientWidth - 40)) {
				leftValue = (html.clientWidth - 35);
			}
			float_year.setAttribute("style", "left:" + leftValue + "px");
			updateFloatYearValue();
		});

		$scope.toggle = function () {
			isTimeline = !isTimeline;
			$('.div-circle').remove();
		};

		$scope.select = function (event) {

		};

		var sizeBaseCircle = 8;

		function circleAtTime(time) {
			if (time < $scope.lowerBound || time > $scope.upperBound) {
				return;
			}

			var focus = $('#focus-point');
			var divHeight = focus.height();
			var divWidth = focus.width() - 10; //Subtract 10 for a 5 pixel gap on the right and the left

			var lowerBoundHorizontal = 250 + 22;
			var upperBoundHorizontal = 250 + divWidth - 5;

			var lowerBoundVertical = 60 + divHeight - 30;
			var upperBoundVertical = 65;

			var availableCircleSpaceHorizontal = upperBoundHorizontal - lowerBoundHorizontal;
			var numberCirclesAvailableHorizontal = Math.floor(availableCircleSpaceHorizontal/10);

			var availableCircleSpaceVertical = upperBoundVertical - lowerBoundVertical;
			var numberCirclesAvailableVertical = Math.floor(availableCircleSpaceVertical/10);

			var yearsPerCircle = (($scope.upperBound - $scope.lowerBound)/numberCirclesAvailableHorizontal);
			var yearsFromLower = time - $scope.lowerBound;

			var numCirclesAlongX = Math.ceil(yearsFromLower/yearsPerCircle);

			var x_pos = (10 * numCirclesAlongX) + lowerBoundHorizontal;

			drawCircle(x_pos, (divHeight/2)+33, sizeBaseCircle, {});
		}

		function drawCircle (x, y, size, item) {
			var circle = document.createElement("div");
			circle.className = "div-circle";
			var topVal = y - (size/2);
			var leftVal = x - (size/2);
			circle.setAttribute("style","top:" + topVal + "px;left:" + leftVal + "px;width:" + size + "px;height:" + size + "px;");
			focus_point.appendChild(circle);
		}

		function loadTimelineOrMap (isTimeline) {
			if (isTimeline) {

			}
			else { //Load in the map view

			}
		}

		var isTimeline = true;

		loadTimelineOrMap(isTimeline);

		for (var i = 1800; i <= 1900; i++) {
			circleAtTime(i);
		}
	}]);