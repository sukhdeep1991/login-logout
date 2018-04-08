"use strict";
angular.module('loginApp', ['ngAnimate', 'ngCookies', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('welcome', {
            url: '/',
            template: "<welcome></welcome>"
        })
        .state('login', {
            url: '/login',
            template: "<login></login>",
            resolve: {
                security: ['$cookies', '$q', 'appConstants', '$state', function($cookies, $q, appConstants, $state){
                    //User is already logged in
                    if($cookies.get(appConstants.LOGIN_COOKIE_ID) !== undefined){
                        //Redirect to home page and reject with error
                        $state.go('home');
                        return $q.reject("Already Authorized");
                    }
                }]
            }
        })
        .state('home', {
            url: '/home',
            template: "<home></home>",
            resolve: {
                security: ['$cookies', '$q', 'appConstants', '$state', function($cookies, $q, appConstants, $state){
                    //User not logged in
                    if($cookies.get(appConstants.LOGIN_COOKIE_ID) === undefined){
                        //Redirect to welcome page and reject with error
                        $state.go('welcome');
                        return $q.reject("Not Authorized");
                    }
                }]
            }
        });

        //Default route if entered route is not valid
        $urlRouterProvider.otherwise("/");
}])
.constant('appConstants', {
    LOGIN_COOKIE_ID: "login_cookie_id",
    VALIDATION_REGEX: /[^./^,\\]$/
});