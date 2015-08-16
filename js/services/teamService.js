'use strict';

angular.module('app').service('TeamService', function () {
    var teamName = '';

    this.saveName = function(name) {
        teamName = name;
    };

    this.getName = function() {
        return teamName;
    };
});