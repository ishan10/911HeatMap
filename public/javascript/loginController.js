/**
 * Created by Chinmay on 11-05-2017.
 */

var app =  angular.module('loginApp',[]);

app.controller('loginController',function($scope,$http){

    $scope.login = function () {

        alert( $scope.pass);
        $http({
           method : 'POST',
            url : "/login",
            data : {
               email : $scope.email,
                password : $scope.pass
            }

        }).success(function (data) {

        });

    }

    $scope.register = function () {

        $http({
            method : 'POST',
            url : "/register1",
            data : {
                email : $scope.email,
                password : $scope.pass,
                zip : $scope.zip
            }

        }).success(function (data) {
        alert(data.data);
        });

    }
});
