(function () {
    'use strict';

    angular.module('app').service('TeamService', function ($route) {
        var teamName = '',
            players = [],
            step = 0,
            ctrlAccess = [
                {url: '/', ctrl: 'NameCtrl', step: 0},
                {url: '/team', ctrl: 'TeamCtrl', step: 1},
                {url: '/match', ctrl: 'MatchCtrl', step: 2}
            ];

        this.saveName = function (name) {
            teamName = name;
            saveToLocalStorage();
        };

        this.getName = function () {
            return teamName;
        };

        this.savePlayers = function (playerArray) {
            players = playerArray;
            saveToLocalStorage();
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
            saveToLocalStorage();
        };

        this.resolveStepUrl = function (path) {
            var i, redirect;
            if (!$route.routes[path]) {
                redirect = ctrlAccess[step].url;
            } else {
                for (i = 0; i < ctrlAccess.length; i++) {
                    if (ctrlAccess[i].step <= step) {
                        redirect = ctrlAccess[i].url;
                    }
                }
            }
            return redirect;
        };

        function saveToLocalStorage() {
            var match = {
                players: players,
                teamName: teamName,
                step: step
            };
            localStorage.setItem('match', JSON.stringify(match));
        }
    });
}());
