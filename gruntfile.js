'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: "less/*.less",
            tasks: ["less"]
        },
        // "less"-task configuration
        less: {
            // production config is also available
            development: {
                options: {
                    // Specifies directories to scan for @import directives when parsing.
                    // Default value is the directory of the source, which is probably what you want.
                    paths: ["css/"],
                },
                files: {
                    // compilation.css  :  source.less
                    "css/carousel.css": "less/carousel.less",
                    "css/layout.css": "less/layout.less",
                    "css/about.css": "less/about.less",
                    "css/projet.css": "less/projet.less"
                }
            },
        },
    });
    // the default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['watch']);
};