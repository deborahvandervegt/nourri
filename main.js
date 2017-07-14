/*
 * Main javascript file.
 */
var app = angular.module('Nourri', ["firebase"]);

app.controller('nourriController', function($scope, $firebaseArray) {

    $scope.todaysDate = new Date;

    var ref = firebase.database().ref();

    $scope.amounts = $firebaseArray(ref.child("amount"));

    $scope.baby_weight = $firebaseArray(ref.child("weight"));

    // Get total amount of feedings equal to input type
    $scope.getTotal = function(type_input){
        var total = 0;
        for(var i = 0; i < $scope.amounts.length; i++){
            if(type_input == $scope.amounts[i].type){
                total += $scope.amounts[i].amount;
            }
        }
        return total;
    }

    $scope.getFeedDate = function(date_string){
        var d = new Date(date_string);
        return d;
    }

    $scope.getOnlyToday = function(item) {
        var now = new Date;
        var date = new Date(item.date);
        return date.setHours(0,0,0,0) == now.setHours(0,0,0,0)
    }
});
