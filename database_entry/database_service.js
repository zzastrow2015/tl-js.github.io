'use strict';

angular.module('databaseEntry.service', ['ngRoute'])
		.service('DatabaseControlService', ['$q', '$http', function ($q, $http) {

		var apiUrl = "https://historicaldv.herokuapp.com/";
		var allItems = [];
		var dataPopulatedPromise;

		function populateAllItems() {
			var promise = $http.get(apiUrl + "getItems").
				success(function (data) {
					allItems = data;
				}).
				error(function (err) {
					alert("Error connecting to server: " + err);
				});
			return promise;
		}

		var addItem = function (newTask) {
			var deferred = $q.defer();
			allItems.push(newTask);
			deferred.resolve();
			return deferred.promise;
		};

		var updateItem = function (index, updatedTask) {
			allItems[index] = updatedTask;
		};

		var getItems = function () {
			return allItems;
		};

		var ensureDataPopulated = function () {
			if (!dataPopulatedPromise) {
				dataPopulatedPromise = populateAllItems();
			}
			return dataPopulatedPromise;
		};

		var removeItem = function (taskToRemove, index) {
			if (!index) {
				index = allItems.indexOf(taskToRemove);
			}
			if (index != -1) {
				allItems.splice(index, 1);
			}
		};

		var getItemIndex = function (task) {
			console.log(allItems);
			console.log(task);
			return allItems.indexOf(task);
		};

		var getItemByIndex = function (index) {
			return allItems[index];
		};

		return {
			addItem:        addItem,
			getItems:       getItems,
			removeItem:     removeItem,
			getItemIndex:   getItemIndex,
			getItemByIndex: getItemByIndex,
			updateItem:     updateItem,
			ensureDataPopulated: ensureDataPopulated
		};
	}]);