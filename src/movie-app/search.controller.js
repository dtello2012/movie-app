
(function() {
	"use strict";
	angular.module('movieApp')
			.controller('SearchController', ['$scope', '$location', SearchController]);
	function SearchController ($scope, $location) {
		$scope.search = function() {
			if($scope.query) {
				$location.path('/results').search('q', $scope.query);
			}
		};
	}

}());