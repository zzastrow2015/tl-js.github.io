'use strict';

angular.module('databaseEntry.view', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view', {
			templateUrl: 'view.html',
			controller: 'ViewCtrl'
		});
	}])

	.controller('ViewCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
		var apiUrl = "https://historicaldv.herokuapp.com/";

		$scope.get = function () {
			$http.get(apiUrl + "getItems").
				success(function (data) {
					console.log("Results: " + JSON.stringify(data));
				}).
			  error(function (err) {
					console.log("Error: " + err);
				});
		};

		$scope.add = function () {
			if (!$scope.who || !$scope.what || !$scope.when || !$scope.where || !$scope.significance) {
				return;
			}

			var who = $scope.who.replace("'", "/");
			var what = $scope.what.replace("'", "/");
			var when = $scope.when.toString();
			var where = $scope.where.replace("'", "/");

			when = when.substr(0, when.length - 15);

			var request = $http({
				method: "post",
				url: apiUrl + "addItem",
				data: {
					tableName: "links",
					who:who,
					what:what,
					when:when,
					where:where,
					ranking:$scope.significance
				}
			});

			request.success(function (data) {
				console.log(data);
			});

			$http.post(apiUrl + "cool").
				success(function (data) {
					console.log(data);
				}).
				error(function (data) {
					console.log(data);
				});
		};

		$scope.goto = function (where) {
			$location.path('/' + where);
		};
	}]);