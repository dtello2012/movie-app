(function() {
    "use strict";
	angular.module('omdb', [])
			.factory('omdbApi', ['$http', '$q', function($http, $q) {
				var service = {};
				var baseUrl = 'http://www.omdbapi.com/?v=1&';

				function httpPromise (baseUrl) {
					var deferred = $q.defer();
					$http.get(baseUrl)
							.success(function(data) {
								deferred.resolve(data);
							})
							.error(function() {
								deferred.reject();
							});
					return deferred.promise;
				}
				service.search = function(query) {
					return httpPromise(baseUrl + 's=' + encodeURIComponent(query));
				};
				service.find = function(id) {
					return httpPromise(baseUrl + 'i=' + id);
				};

				return service;
			}]);
}());