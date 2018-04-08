"use strict";
angular.module("loginApp")
.factory("authService", 
['$http', '$q', '$timeout', '$cookies', 'appConstants', 
function($http, $q, $timeout, $cookies, appConstants){
    var loginApiInProgress = false, logoutApiInProgress = false;
    return {
        loginUser: function(username, password) {
            var deferred = $q.defer();
            loginApiInProgress = true;
            $http.post('http://localhost:13000/api/login', {
                username: username,
                password: password
            }).then(function(response){
                loginApiInProgress = false;
                deferred.resolve(response);
            }, function(response){
                loginApiInProgress = false;
                deferred.reject(response);
            });
            return deferred.promise;
        },

        isLoggingIn: function(){
            return loginApiInProgress;
        },

        logoutUser: function(){
            var deferred = $q.defer();
            logoutApiInProgress = true;
            $timeout(function(){
                logoutApiInProgress = false;
                $cookies.remove(appConstants.LOGIN_COOKIE_ID);
                deferred.resolve();
            }, Math.random()*3000);
            return deferred.promise;  
        },

        isLoggingOut: function(){
            return logoutApiInProgress;
        }
    };
}]);