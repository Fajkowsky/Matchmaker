(function () {
    'use strict';

    angular.module('app').controller('MatchCtrl', function ($scope, TeamService) {
        var matchCtrl = $scope.matchCtrl = {
            name: TeamService.getName(),
            players: TeamService.getPlayers()
        };

        matchCtrl.playerList = function () {
            return matchCtrl.players.join(', ');
        };

        matchCtrl.groups = function () {
            return Math.ceil(matchCtrl.players.length/2);
        };
    });
}());
