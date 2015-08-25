(function () {
    'use strict';

    angular.module('app').controller('MatchCtrl', function ($scope, TeamService) {
        $scope.matchCtrl = {
            name: TeamService.getName(),
            players: TeamService.getPlayers().join(', ')
        };
    });
}());