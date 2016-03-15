(function() {
    "use strict";
    describe('Search Controller', function() {
        var $scope;
        var $location;

        beforeEach(module('movieApp'));

        beforeEach(inject(function(_$controller_, _$location_) {
            $scope = {};
            $location = _$location_;

            _$controller_('SearchController', {$scope: $scope, $location : $location });
        }));

        it('should redirect to the query results page for a non-empty query', function(){
            $scope.query = 'star wars';
            $scope.search();
            expect($location.url()).toBe('/results?q=star%20wars');
        });
        it('should not redirect to results for an empty query', function() {
            $scope.query = '';
            $scope.search();
            expect($location.url()).toBe('');
        });

    });
}());