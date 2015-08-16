'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/name.html',
                controller: 'NameCtrl'
            });
});