"use strict";
angular.module("loginApp")
.component("home", {
    templateUrl: "./templates/home.html",
    controller: ['$cookies', '$state', 'appConstants', 'authService', 
    function($cookies, $state, appConstants, authService){
        var $ctrl = this;
        $ctrl.logoutInProgress = false;
        $ctrl.loggedInUsername = $cookies.get(appConstants.LOGIN_COOKIE_ID);

        $ctrl.doLogout = function(){
            $ctrl.logoutInProgress = true;
            authService.logoutUser().then(function(){
                $ctrl.logoutInProgress = false;
                $state.go('welcome');
            });
        };
    }] 
});