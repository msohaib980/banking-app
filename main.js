'use strict';

var app = angular.module('myApp',[]);

app.controller("mainCtrl", function ($scope,$interval) {
  $scope.expenseracker = {};

 $scope.userinput = [

 ]

// adding to tables
  $scope.addBalance = function () {
    if($scope.expenseracker.des && $scope.expenseracker.debit && $scope.expenseracker.date && $scope.expenseracker.credit){

      $scope.userinput.push($scope.expenseracker);
      $scope.expenseracker = {};
    }

  };

  $scope.removeEntry = function (expense) {
    var index = $scope.userinput.indexOf(expense);
      $scope.userinput.splice(index,1)
  }







})
