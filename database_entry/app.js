'use strict';

// Declare app level module which depends on views, and components
angular.module('databaseEntry', [
	'ngRoute',
	'databaseEntry.view',
	'databaseEntry.add',
	'databaseEntry.service'
])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view'});
	}]);
