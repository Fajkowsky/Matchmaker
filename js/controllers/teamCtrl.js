(function () {
    'use strict';

    angular.module('app').controller('TeamCtrl', function ($scope, $location, TeamService) {
        var teamCtrl = $scope.teamCtrl = {
            team: TeamService.getName(),
            minialPlayersAmount: 2,
            players: [],
            newTeamPlayer: ''
        };

        teamCtrl.addNewPlayer = function () {
            if ($scope.playerForm.$valid) {
                teamCtrl.players.push(teamCtrl.newTeamPlayer);
                teamCtrl.newTeamPlayer = '';
                $scope.playerForm.$setPristine();
            } else {
                $scope.playerForm.$setDirty();
            }
        };

        teamCtrl.makeMatch = function () {
            TeamService.savePlayers(teamCtrl.players);
            $location.url('/match');
        };
    });
}());