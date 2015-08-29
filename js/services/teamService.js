(function () {
    'use strict';

    angular.module('app').service('TeamService', function () {
        var teamName = '';
        var players = [];
        var step = 0;
        var ctrlAcces = {
            0 : {url: '/', ctrl: 'NameCtrl'},
            1 : {url: '/team', ctrl: 'TeamCtrl'},
            2 : {url: '/match', ctrl: 'MatchCtrl'}
        };

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
            step = 0;
        };

        this.setStep = function (value) {
            step = value;
        };

        this.resolveStepUrl = function () {
            return (ctrlAcces[step].url);
        };
    });
}());
