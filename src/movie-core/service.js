(function() {
    "use strict";
		angular.module('movieCore', ['ngResource'] )
				.factory('PopularMovies', function($resource){
					//TODO: replace token with an actual token
					var token = 'teddybear';
					return $resource('popular/:movieId', { movieId: '@id'}, {
						update: {
							method: 'PUT',
							headers: { 'authToken': token }
						},
						get: {
							method: 'GET',
							headers: { 'authToken': token }
						},
						query: {
							method: 'GET',
							isArray:true,
							headers: { 'authToken': token }
						},
						save: {
							method: 'POST',
							headers: { 'authToken': token }
						},
						remove: {
							method: 'DELETE',
							headers: { 'authToken': token }
						}
					});
				});
}());