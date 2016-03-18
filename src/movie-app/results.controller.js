(function () {
	"use strict";
	angular.module('movieApp')
			.controller('ResultsController', ['$scope', '$location', '$exceptionHandler', 'omdbApi',

			function ResultController ($scope, $location, $exceptionHandler, omdbApi) {

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
						.catch(function(e) {
							//$scope.errorMessage= 'Something went wrong';
							//throw 'Something went wrong';
							$exceptionHandler(e);
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