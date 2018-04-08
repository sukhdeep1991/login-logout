"use strict";
angular.module("loginApp")
.component("login", {
    templateUrl: "./templates/login.html",
    controller: ['authService', '$state', '$cookies', 'appConstants', 
    function(authService, $state, $cookies, appConstants){
        var $ctrl = this;
        $ctrl.regex = appConstants.VALIDATION_REGEX;
        $ctrl.loginDetails = {
            username: "",
            password: "",
            errorMessage: "",
            loginInProgress: false
        };

        $ctrl.doLogin = function(loginForm){
            if($ctrl.loginDetails.loginInProgress !== true && 
                loginForm.$valid) {
                $ctrl.loginDetails.errorMessage = "";
                $ctrl.loginDetails.loginInProgress = true;
                authService.loginUser($ctrl.loginDetails.username, $ctrl.loginDetails.password)
                .then(function(response){
                    $ctrl.loginDetails.loginInProgress = false;
                    if(response.data.success) {
                        $cookies.put(appConstants.LOGIN_COOKIE_ID, $ctrl.loginDetails.username);
                        //Login success
                        $state.go("home");
                    } else {
                        //Login error, show the error message
                        $ctrl.loginDetails.errorMessage = response.data.message;
                    }
                }, function(){
                    $ctrl.loginDetails.loginInProgress = false;
                    //As Credential error already comming in success response, error response must be due to 
                    //unavailability of the server
                    $ctrl.loginDetails.errorMessage = "Could not reach the servers";
                });
            }
        };
    }] 
});