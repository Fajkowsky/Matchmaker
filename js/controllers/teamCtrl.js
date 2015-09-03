(function () {
    'use strict';

    angular.module('app').controller('TeamCtrl', function ($scope, $location, TeamService) {
        var teamCtrl = $scope.teamCtrl = {
            team: TeamService.getName(),
            minimalPlayersAmount: 2,
            players: TeamService.getPlayers(),
            playerName: '',
            edit: {
                optionsPlayer: '',
                playerIndex: null,
                mode: false
            }
        };

        teamCtrl.addNewPlayer = function () {
            if ($scope.playerForm.$valid) {
                if (teamCtrl.edit.mode) {
                    teamCtrl.players[teamCtrl.edit.playerIndex] = teamCtrl.playerName;
                    teamCtrl.edit.mode = false;
                } else {
                    teamCtrl.players.push(teamCtrl.playerName);
                }
                teamCtrl.playerName = '';
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

        teamCtrl.deletePlayer = function (player) {
            var index = teamCtrl.players.indexOf(player);
            teamCtrl.players.splice(index, 1);
        };

        teamCtrl.editPlayer = function (player) {
            var index = teamCtrl.players.indexOf(player);
            teamCtrl.edit.mode = true;
            teamCtrl.edit.playerIndex = index;
            teamCtrl.playerName = teamCtrl.players[index];
        };

        teamCtrl.abortEdit = function () {
            teamCtrl.edit.mode = false;
            teamCtrl.playerName = '';
        };

        teamCtrl.showOptions = function (player) {
            return teamCtrl.edit.optionsPlayer === player;
        };

        teamCtrl.showEditOptions = function (player) {
            teamCtrl.edit.optionsPlayer = player;
        };

        teamCtrl.hideEditOptions = function () {
            teamCtrl.edit.optionsPlayer = '';
        };
    });
}());
