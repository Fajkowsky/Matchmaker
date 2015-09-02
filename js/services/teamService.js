(function () {
    'use strict';

    angular.module('app').service('TeamService', function ($route) {
        var match = {
                players: [],
                teamName: '',
                step: 0
            },
            ctrlAccess = [
                {url: '/', ctrl: 'NameCtrl', step: 0},
                {url: '/team', ctrl: 'TeamCtrl', step: 1},
                {url: '/match', ctrl: 'MatchCtrl', step: 2}
            ];

        this.saveName = function (name) {
            match.teamName = name;
            saveToLocalStorage();
        };

        this.getName = function () {
            return match.teamName;
        };

        this.savePlayers = function (playerArray) {
            match.players = playerArray;
            saveToLocalStorage();
        };

        this.getPlayers = function () {
            return match.players;
        };

        this.resetData = function () {
            match = {
                players: [],
                teamName: '',
                step: 0
            };
            localStorage.setItem('match', JSON.stringify(match));
        };

        this.setStep = function (value) {
            match.step = value;
            saveToLocalStorage();
        };

        this.resolveStepUrl = function (path) {
            var i, redirect;
            if (!$route.routes[path]) {
                redirect = ctrlAccess[match.step].url;
            } else {
                for (i = 0; i < ctrlAccess.length; i++) {
                    if (ctrlAccess[i].step <= match.step) {
                        if (path === ctrlAccess[i].url) {
                            return path;
                        }
                        redirect = ctrlAccess[i].url;
                    }
                }
            }
            return redirect;
        };

        this.restoreLocalStorageData = function () {
            var matchStr = localStorage.getItem('match');

            match = JSON.parse(matchStr);
        };

        function saveToLocalStorage() {
            localStorage.setItem('match', JSON.stringify(match));
        }
    });
}());
