(function () {
    'use strict';

    angular.module('app').controller('TeamCtrl', function ($scope, $location, TeamService) {
        var teamCtrl = $scope.teamCtrl = {
            team: TeamService.getName(),
            minimalPlayersAmount: 2,
            players: TeamService.getPlayers(),
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
            TeamService.setStep(2);
            $location.url('/match');
        };

        teamCtrl.playersRequired = function () {
            return teamCtrl.players.length < teamCtrl.minimalPlayersAmount;
        };
    });
}());
