/* global myData */
/// <reference path="../../typings/angularjs/angular.d.ts"/>

var myApp = angular.module('uiRouter.dmvs', ['ui.router','ui.grid', 'ui.grid.edit', 'ui.grid.selection']);

myApp.controller('DmvsController', ['$scope','$http', function($scope,$http) {

        
    $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
            .success(function(data) {
              $scope.myData = data;
            });                  
            
        $scope.gridOptions = {};
        $scope.Delete = function(row) {
            var index = $scope.gridOptions.data.indexOf(row.entity);
            $scope.gridOptions.data.splice(index, 1);
        };
        $scope.Add = function(row) {
            var index = $scope.gridOptions.data.indexOf(row.entity);
            $scope.gridOptions.data.splice(index+1, 0,"");
        };
        
        $scope.gridOptions.columnDefs = [{
            name: 'firstName',
            field: 'firstName'
        }, {
            name: 'lastNamer',
            field: 'firstName'
        }, {
            name: 'ShowScope',
            cellTemplate: '<button class="btn primary" ng-click="grid.appScope.Delete(row)">Delete Me</button>'+
            '<button class="btn primary" ng-click="grid.appScope.Add(row)">Add Me</button>'
        }];
        
        $scope.gridOptions.data = [{
            "firstName": "Cox",
            "lastName": "Carney",
            "company": "Enormo",
            "employed": true
        }, {
            "firstName": "Lorraine",
            "lastName": "Wise",
            "company": "Comveyer",
            "employed": false
        }, {
            "firstName": "Nancy",
            "lastName": "Waters",
            "company": "Fuelton",
            "employed": false
        }];


}]);