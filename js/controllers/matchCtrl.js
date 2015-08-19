(function () {
    'use strict';

    angular.module('app').controller('MatchCtrl', function ($scope, TeamService) {
        var matchCtrl = $scope.matchCtrl = {
            name: TeamService.getName(),
            players: TeamService.getPlayers().join(', ')
        };
    });
})();