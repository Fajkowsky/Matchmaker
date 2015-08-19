(function () {
    'use strict';

    angular.module('app').directive('focusField', function () {
        return function (scope, element) {
            if (element) {
                element[0].focus();
            }
        };
    });
})();