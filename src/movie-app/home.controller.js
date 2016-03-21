(function () {
	"use strict";
	angular.module('movieApp')
			.controller('HomeController', ['$scope', '$interval', 'omdbApi', 'PopularMovies', '$log', HomeController]);
	function HomeController ($scope, $interval, omdbApi, PopularMovies, $log) {
		var results = [];
		var idx = 0;
		var findMovie = function(id) {
			omdbApi.find(id)
					.then(function(data) {
						$scope.result = data;
					})
					.catch(function(e) {
						$exceptionHandler(e);
					});
		};

		PopularMovies.query(function(data) {
			results = data;
			//$log.info(results);
			//$log.info(results);

				findMovie(results[0]);
				$interval(function() {
					++idx;
					findMovie(results[idx % results.length]);
				}, 5000);
		});

	}
}());
