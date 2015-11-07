'use strict';

// Declare app level module which depends on views, and components
angular.module('bubbleView', [
	'ngRoute',
	'bubbleView.view',
	'databaseEntry.service'
])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view'});
	}]);
