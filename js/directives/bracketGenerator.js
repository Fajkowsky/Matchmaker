(function () {
    'use strict';

    angular.module('app').directive('bracket', function () {
        return {
            templateUrl: 'templates/bracket.html',
            scope: {
                players: '='
            }
        };
    });
}());
