(function () {
    'use strict';

    angular.module('app').config(function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/name.html',
                controller: 'NameCtrl'
            }).
            when('/team', {
                templateUrl: 'templates/team.html',
                controller: 'TeamCtrl'
            }).
            when('/match', {
                templateUrl: 'templates/match.html',
                controller: 'MatchCtrl'
            }).
            otherwise('/');
    }).run(function ($rootScope, $location, TeamService) {
        $rootScope.$on('$routeChangeStart', function () {
            TeamService.restoreLocalStorageData();
            var shouldBe = TeamService.resolveStepUrl($location.path());
            $location.path(shouldBe);
        });
    });
}());
