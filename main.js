/*
 * Main javascript file.
 */
var app = angular.module('Nourri', []);

app.controller('nourriController', ['$scope', function($scope) {
   $scope.scheme = 'Hello World in controller';
}]);
