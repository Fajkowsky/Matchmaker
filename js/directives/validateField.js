(function () {
    'use strict';

    angular.module('app').directive('validateField', function () {
        return {
            scope: {
                ctrlScope: '=validateField'
            },
            link: function (scope, element) {
                var ctrlScope = scope.ctrlScope;

                function setError(msg) {
                    ctrlScope.showError = true;
                    ctrlScope.errMsg = msg;
                }

                function disableError() {
                    ctrlScope.showError = false;
                    ctrlScope.errMsg = '';
                }

                element.on('keyup', function () {
                    if (element.val() === '') {
                        setError('Required');
                    }
                    else {
                        disableError();
                    }
                    scope.$apply();
                });
            }
        };
    });
})();