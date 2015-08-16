'use strict';

angular.module('app').controller('TeamCtrl', function($scope, TeamService) {
    $scope.team = TeamService.getName();
});