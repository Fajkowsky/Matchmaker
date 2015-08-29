(function () {
    'use strict';

    angular.module('app').controller('NameCtrl', function ($scope, $location, TeamService) {
        var nameCtrl = $scope.nameCtrl = {
            teamName: TeamService.getName(),
            showError: false,
            errMsg: ''
        };

        nameCtrl.saveName = function () {
            if (!nameCtrl.showError) {
                TeamService.saveName(nameCtrl.teamName);
                TeamService.setStep(1);
                $location.url('/team');
            }
        };
    });
}());
