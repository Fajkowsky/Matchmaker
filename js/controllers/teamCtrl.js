(function () {
    'use strict';

    angular.module('app').controller('TeamCtrl', function ($scope, $location, TeamService) {
        var teamCtrl = $scope.teamCtrl = {
            team: TeamService.getName(),
            players: [],
            newTeamPlayer: '',
            matchError: '',
            showMatchError: false,
            showError: false,
            errMsg: ''
        };

        function setError(msg) {
            teamCtrl.showMatchError = true;
            teamCtrl.matchError = msg;
        }

        function disableError() {
            teamCtrl.showMatchError = false;
            teamCtrl.matchError = '';
        }

        teamCtrl.addNewPlayer = function () {
            if (teamCtrl.players.indexOf(teamCtrl.newTeamPlayer) === -1) {
                disableError();
                teamCtrl.players.push(teamCtrl.newTeamPlayer);
            }
            else {
                setError('Player already added.');
            }
        };

        teamCtrl.makeMatch = function () {
            if (teamCtrl.players.length > 1) {
                TeamService.savePlayers(teamCtrl.players);
                $location.url('/match');
            }
            else {
                setError('Too few players');
            }
        };
    });
})();