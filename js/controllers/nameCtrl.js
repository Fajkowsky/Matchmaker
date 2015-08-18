'use strict';

angular.module('app').controller('NameCtrl', function ($scope, $location, TeamService) {
    $scope.teamName = '';
    $scope.showError = false;

    $scope.saveName = function () {
        var name = $scope.teamName;

        if (TeamService.emptyValidation(name)) {
            TeamService.saveName(name);
            $location.url('/team');
        }
        else {
            $scope.showError = true;
        }
    };
});