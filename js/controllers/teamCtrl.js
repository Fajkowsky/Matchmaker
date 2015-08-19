'use strict';

angular.module('app').controller('TeamCtrl', function($scope, $location, TeamService) {
    $scope.team = TeamService.getName();
    var players = $scope.players = [];
    $scope.newTeamPlayer = $scope.matchError = '';
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
        if ($scope.newTeamPlayer !== '') {
            if (players.indexOf($scope.newTeamPlayer) === -1) {
                disableError();
                $scope.players.push($scope.newTeamPlayer);
            }
            else {
                setError('Player already added.');
            }
        }
        else {
            $scope.showFormError = true;
        }
    };

    $scope.makeMatch = function () {
        if(players.length > 1) {
            TeamService.savePlayers(players);
            $location.url('/match');
        }
        else {
            setError('Too few players');
        }
    };
});