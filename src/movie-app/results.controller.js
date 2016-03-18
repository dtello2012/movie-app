(function () {
	"use strict";
	angular.module('movieApp')
			.controller('ResultsController', ['$scope', '$location', 'omdbApi',

			function ResultController ($scope, $location, omdbApi) {

				var query = $location.search().q;
				//$scope.results = [];
				//
				//$scope.results.push({data: {Title: 'Star Wars: Episode IV - A New Hope'}});
				//$scope.results.push({data: {Title: 'Star Wars: Episode V - The Empire Strikes Back'}});
				//$scope.results.push({data: {Title: 'Star Wars: Episode VI - Return of the Jedi'}});
				omdbApi.search(query)
						.then(function(data) {
							$scope.results = data.Search;
						})
						.catch(function() {
							$scope.errorMessage= 'Something went wrong';
						});
				$scope.expand = function expand(index, id) {
					omdbApi.find(id)
							.then(function(data) {
								$scope.results[index].data = data;
								$scope.results[index].open = true;
							});
				};

			}]);

}());