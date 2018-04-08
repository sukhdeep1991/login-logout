"use strict";
angular.module("loginApp")
.component("layout", {
    templateUrl: "./templates/layout.html",
    controller: ['$cookies', 'appConstants', 'authService', function($cookies, appConstants, authService){
        var $ctrl = this;

        $ctrl.getStatusIndicator = function() {
            if(authService.isLoggingIn()){
                return "Logging in (operation in progress)";
            } else if(authService.isLoggingOut()){
                return "Logging out (operation in progress)";
            } else if($cookies.get(appConstants.LOGIN_COOKIE_ID) !== undefined) {
                return "Logged In";
            } else {
                return "Not logged in";
            }
        }; 
    }] 
});