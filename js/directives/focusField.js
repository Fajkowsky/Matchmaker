(function () {
    'use strict';

    angular.module('app').directive('focusField', function () {
        return function (scope, elem) {
            if (elem) {
                elem[0].focus();
            }
        };
    });
}());