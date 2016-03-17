(function() {
    "use strict";
    describe('Search Controller', function() {
        var $scope;
        var $location;
        var $timeout;

        beforeEach(module('movieApp'));

        beforeEach(inject(function(_$controller_, _$location_, _$timeout_) {
            $scope = {};
            $location = _$location_;
            $timeout = _$timeout_;

            _$controller_('SearchController', {
                $scope: $scope,
                $location: $location,
                $timeout: $timeout });
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

        it('should redirect after 1 seconds of keyboard inactivity', function() {
            $scope.query = 'star wars';
            $scope.keyup();
            $timeout.flush(1000);
            expect($timeout.verifyNoPendingTasks).not.toThrow();
            expect($location.url()).toBe('/results?q=star%20wars');
        });

        it('should cancel timeout in keydown', function() {
            $scope.query = 'star wars';
            $scope.keyup();
            $scope.keydown();
            //$timeout.flush(1000);
            expect($timeout.verifyNoPendingTasks).not.toThrow();
        });

        it('should cancel timeout in keydown', function() {
            $scope.query = 'star wars';
            $scope.keyup();
            $scope.search();
            //$timeout.flush(1000);
            expect($timeout.verifyNoPendingTasks).not.toThrow();
        });

    });
}());