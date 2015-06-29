/// <reference path="../typings/angularjs/angular.d.ts"/>

var routerApp = angular.module('uiRouter', ['ui.router', 'uiRouter.dmvs']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'app/dmvs/partial-dmvs.html',
            controller:'DmvsController'
        })

});
