/*
 * Main javascript file.
 */
var app = angular.module('Nourri', ["firebase"]);

app.controller('nourriController', function($scope, $firebaseArray) {

    var ref = firebase.database().ref().child("amount");
    $scope.amounts = $firebaseArray(ref);
    
});
