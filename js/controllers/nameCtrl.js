'use strict';

angular.module('app').controller('NameCtrl', function($scope, $location) {
    $scope.saveName = function() {
        $location.url('/team');
    };
});