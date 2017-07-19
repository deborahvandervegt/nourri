/*
 * Main javascript file.
 */
var app = angular.module('Nourri', ["firebase"]);

app.controller('nourriController', function($scope, $firebaseArray) {
    // Firebase variables
    var ref = firebase.database().ref();
    $scope.meals = $firebaseArray(ref.child("meals"));
    $scope.baby_weight = $firebaseArray(ref.child("weight"));

    $scope.date_today = new Date;
    $scope.meal_view_date = new Date;

    $scope.isToday = function(){
        return $scope.meal_view_date.setHours(0,0,0,0) == $scope.date_today.setHours(0,0,0,0);
    }

    $scope.setFilterDate = function(daysAmount){
        $scope.meal_view_date.setDate($scope.meal_view_date.getDate() + daysAmount);
    }

    // Get total amount of feedings equal to input type
    $scope.getTotalMeals = function(type_input){
        var total = 0;
        for(var i = 0; i < $scope.meals.length; i++){
            if(type_input == $scope.meals[i].type && $scope.showOneDay($scope.meals[i])){
                total += $scope.meals[i].amount;
        }}
        return total;
    }

    // Get total amount of feedings equal to input type
    $scope.getTodaysFeedingTotal = function(){
        var total = 0;
        for(var i = 0; i < $scope.meals.length; i++){
            if($scope.showOneDay($scope.meals[i])){
                total++;
        }}
        return total;
    }

    $scope.getFeedDate = function(date_string){
        var d = new Date(date_string);
        return d;
    }

    $scope.showOneDay = function(input){
        var input_date = $scope.getFeedDate(input.date);
        var view_date = new Date($scope.meal_view_date);
        return view_date.setHours(0,0,0,0) == input_date.setHours(0,0,0,0);
    }
});
