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
		var list_container = document.getElementById("list-container");
		var html = document.documentElement;
		var height = html.clientHeight;

		list_container.setAttribute("style", "max-height:" + (height - 50) + "px");
		main_section.setAttribute("style", "height:" + (height - 35) + "px");
		search_box.setAttribute("style", "height:" + height + "px");
		container.setAttribute("style", "height:" + height + "px");

		window.onresize = function () {
			height = html.clientHeight;

			list_container.setAttribute("style", "max-height:" + (height - 50) + "px");
			main_section.setAttribute("style", "height:" + (height - 35) + "px");
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
	}]);