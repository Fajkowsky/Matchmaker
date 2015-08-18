'use strict';

angular.module('app').controller('TeamCtrl', function($scope, $location, TeamService) {
    $scope.team = TeamService.getName();
    $scope.players = [];
    $scope.newTeamPlayer = '';
    $scope.playerNumber = $scope.players.length;
    $scope.showFormError = false;
    $scope.showMatchError = false;
    $scope.playerCountError = 'Too few players';

    $scope.addNewPlayer = function () {
        var playerName = $scope.newTeamPlayer;
        var players = $scope.players;

        if (TeamService.emptyValidation(playerName)) {
            $scope.players.push(playerName);
            $scope.playerNumber = players.length;
        }
        $scope.showFormError = true;
    };

    $scope.makeMatch = function () {
        var players = $scope.players;

        if(players.length > 1) {
            TeamService.savePlayers(players);
            $location.url('/match');
        }
        $scope.showMatchError = true;
    };
});