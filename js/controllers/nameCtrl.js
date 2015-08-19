(function () {
    'use strict';

    angular.module('app').controller('NameCtrl', function ($scope, $location, TeamService) {
        var nameCtrl = $scope.nameCtrl = {
            teamName: '',
            showError: false
        };

        nameCtrl.saveName = function () {
            var name = nameCtrl.teamName;

            if (name !== '') {
                TeamService.saveName(name);
                $location.url('/team');
            }
            else {
                nameCtrl.showError = true;
            }
        };
    });
})();