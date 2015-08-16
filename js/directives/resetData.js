'use strict';

angular.module('app').directive('resetData', function ($location, TeamService) {
    return {
        templateUrl: 'templates/reset.html',
        link: function (scope) {
            scope.resetData = function () {
                TeamService.resetData();
                $location.url("/");
            };
        }
    }
});