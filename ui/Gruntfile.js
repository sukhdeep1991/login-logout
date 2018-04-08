"use strict";
module.exports = function(grunt) {

    grunt.initConfig({
        wiredep: {
            target: {
                src: './index.html',
                overrides: {
                    bootstrap: {
                        main: ["dist/css/bootstrap.min.css", "dist/js/bootstrap.bundle.min.js"]
                    }
                }
            },

        }
    });
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-serve');

};