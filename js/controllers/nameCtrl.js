(function () {
    'use strict';

    angular.module('app').controller('NameCtrl', function ($scope, $location, TeamService) {
        var nameCtrl = $scope.nameCtrl = {
            teamName: '',
            showError: false,
            errMsg: ''
        };

        nameCtrl.saveName = function () {
            if (!nameCtrl.showError) {
                TeamService.saveName(nameCtrl.teamName);
                $location.url('/team');
            }
        };
    });
}());