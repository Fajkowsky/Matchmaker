(function () {
    'use strict';

    angular.module('app').controller('MatchCtrl', function ($scope, TeamService) {
        $scope.name = TeamService.getName();
        $scope.players = TeamService.getPlayers().join(', ');
    });
})();