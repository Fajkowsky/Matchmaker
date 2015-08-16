'use strict';

angular.module('app').controller('TeamCtrl', function($scope, $location, TeamService) {
    $scope.team = TeamService.getName();
    $scope.players = [];
    $scope.newTeamPlayer = '';
    $scope.playerNumber = $scope.players.length;

    $scope.addNewPlayer = function () {
        $scope.players.push($scope.newTeamPlayer);
        $scope.playerNumber = $scope.players.length;
    };

    $scope.makeMatch = function () {
        TeamService.savePlayers($scope.players);
        $location.url('/match');
    };
});