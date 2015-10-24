'use strict';

angular.module('databaseEntry.add', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/add', {
			templateUrl: 'addClassification.html',
			controller: 'AddCtrl'
		});
	}])

	.controller('AddCtrl', ['$scope', '$location', function ($scope, $location) {
		var classifications = [
			{
				"title": "Invention",
				"icon": "fa-lightbulb-o"
			},
			{
				"title": "Photos",
				"icon": "fa-photo"
			}
		];

		$scope.classifications = classifications;

		$scope.goto = function (where) {
			$location.path('/' + where);
		};

		$scope.fontAwesomeIcons = [
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

		$scope.isDropdown = false;

		$scope.fontAwesomeIcons = $scope.fontAwesomeIcons.sort();

		$scope.selectIcon = function(icon) {
			$scope.selectedIcon = icon;
		}
	}]);


























