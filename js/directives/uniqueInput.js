(function () {
    'use strict';

    angular.module('app').directive('unique', function () {
        return {
            scope: {
                players: '=unique'
            },
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.$validators.unique = function (modelValue) {
                    return scope.players.indexOf(modelValue) === -1;
                };
            }
        };
    });
}());