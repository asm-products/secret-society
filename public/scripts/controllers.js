var app = angular.module('app', []);

app.controller('MainCtrl', function ($scope) {
    $scope.addEmail = function (signup) {
        console.log(signup.email);
    }
});