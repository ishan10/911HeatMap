/**
 * Created by Chinmay on 11-05-2017.
 */

var app =  angular.module('loginApp',[]);

app.controller('loginController',function($scope,$http){

    $scope.login = function () {
        $http({
           method : 'POST',
            url : "/logincheck",
            data : {
               "email" : $scope.email,
               "password" : $scope.pass
            }

        }).success(function (data) {
            if(data.data){
                window.location.assign("/");
            }
            else{

                window.location.assign("/login");
            }
        });

    }

    $scope.register = function () {

        $http({
            method : 'POST',
            url : "/register1",
            data : {
                email : $scope.email,
                password : $scope.pass,
                zip : $scope.zip,
                mobile : $scope.mobile
            }

        }).success(function (data) {
        if(data.data == 200){
            window.location.assign("/login");
        }
        else{
            window.location.assign("/register");
        }
        });

    }

    $scope.sendAlert = function () {
       $http({
            method : 'POST',
            url : "/sendAlert",
            data : {
                zip : $scope.zipcode,
                message : $scope.message
            }

        }).success(function (data) {
           alert(data);
        });

    }

    $scope.getTweets = function () {
        $http({
            method : 'GET',
            url : "/getTweets",
            data : {

            }

        }).success(function (data) {
           $scope.valdata = data.data;
            var val = $scope.valdata[0].data;
            alert(val);
        });

    }


});
