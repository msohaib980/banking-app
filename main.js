'use strict';

var app = angular.module('myApp',[]);

app.controller("mainCtrl", function ($scope,$interval) {

 $scope.userinput = [

 ]

// adding to tables
  $scope.addBalance = function () {
    $scope.userinput.push($scope.expenseracker);
    $scope.expenseracker = {};
    // var total =$scope.userinput.length
    // console.log(total);
    // console.log($scope.userinput[0].debit)
  };

  $scope.removeEntry = function (expense) {
    var index = $scope.userinput.indexOf(expense);
      $scope.userinput.splice(index,1)
  }







})
