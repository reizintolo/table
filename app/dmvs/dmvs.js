/* global myData */
/// <reference path="../../typings/angularjs/angular.d.ts"/>

var myApp = angular.module('uiRouter.dmvs', ['ui.router','ui.grid', 'ui.grid.edit', 'ui.grid.selection']);

myApp.controller('DmvsController', ['$scope','$http', function($scope,$http) {

        
    $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
            .success(function(data) {
              $scope.myData = data;
            });

}]);