'use strict';

angular.module('app').controller('NameCtrl', function ($scope, $location, TeamService) {
    $scope.teamName = '';

    $scope.saveName = function () {
        TeamService.saveName($scope.teamName);
        $location.url('/team');
    };
});