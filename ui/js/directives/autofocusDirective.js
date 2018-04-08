"use strict";
/**
 * Directive to autofucus input of a form
 */
angular.module('loginApp')
.directive('autofocus', ['$timeout', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            attrs.$observe('autofocus', function() {
                if(attrs.autofocus === "true" || attrs.autofocus === ""){
                    $timeout(function() {
                        element[0].focus();
                    });
                }
            });
        }
    };
}]);