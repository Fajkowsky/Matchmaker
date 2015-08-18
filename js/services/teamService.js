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

    this.emptyValidation = function (name) {
        return name !== '';
    };

    this.checkIfUnique = function (item, array) {
        if (array.length) {
            for (var i in array) {
                if (array[i] === item) {
                    return false;
                }
            }
        }
        return true;
    }
});