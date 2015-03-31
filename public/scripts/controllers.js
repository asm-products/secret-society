var app = angular.module('app', []);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
    $scope.addEmail = function() {
        $http.post('/email', $scope.signup).success(function(){

            // This gets called when the users email
            // has been successfully added to the list
            // of emails. Angular should automatically
            // replace the email field with a
            // confirmation to let the user know that.

        });
    };
}]);
