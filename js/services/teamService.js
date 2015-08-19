'use strict';

angular.module('app').service('TeamService', function () {
    var teamName = '';
    var players = [];

    this.saveName = function (name) {
        teamName = name;
    };

    this.getName = function () {
        return teamName;
    };

    this.savePlayers = function (playerArray) {
        players = playerArray;
    };

    this.getPlayers = function () {
        return players;
    };

    this.resetData = function () {
        teamName = '';
        players = [];
    };
});