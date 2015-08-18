'use strict';

angular.module('app').controller('TeamCtrl', function($scope, $location, TeamService) {
    $scope.team = TeamService.getName();
    var players = $scope.players = [];
    $scope.newTeamPlayer = $scope.matchError = '';
    $scope.playerNumber = $scope.players.length;
    $scope.showFormError = $scope.showMatchError = false;

    function setError (msg) {
        $scope.showMatchError = true;
        $scope.matchError = msg;
    }

    function disableError () {
        $scope.showMatchError = false;
        $scope.matchError = '';
    }

    $scope.addNewPlayer = function () {
        var playerName = $scope.newTeamPlayer;

        if (TeamService.emptyValidation(playerName)) {
            if (TeamService.checkIfUnique(playerName, players)) {
                disableError();

                $scope.players.push(playerName);
                $scope.playerNumber = players.length;
            }
            else {
                setError('Player already added.');
            }
        }
        $scope.showFormError = true;
    };

    $scope.makeMatch = function () {
        if(players.length > 1) {
            TeamService.savePlayers(players);
            $location.url('/match');
        }
        setError('Too few players');
    };
});