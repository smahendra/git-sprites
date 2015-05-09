module.exports = function(grunt) {

   "use strict";
   require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        clean: ["output/css"],

        svg_sprite: {
            basic: {
                // Target basics 
                expand: true,
                cwd: 'assets',
                src: ['**/*.svg'],
                dest: 'out',
                // Target options 
                options: {
                    shape:{
                            spacing: {         
                            padding: 5 // Add padding 
                        }   
                    },
                    mode: {
                        css: {      
                            render: {
                                css : false  
                            }
                        }
                    }
                }
            }
        },
         svgmin: {
            options: {
                plugins: [
                    {
                        removeViewBox: false
                    }, {
                        removeUselessStrokeAndFill: false
                    }
                ]
            },
            dist: {
                files: [{
                    src: ['output/css/svg/*.svg'],
                    dest: "output/css/svg/compressed.svg"
                }]
            }
        }
    });

    //grunt.loadNpmTasks('grunt-svg-sprite');
    //grunt.loadNpmTasks('grunt-svgmin');

    grunt.registerTask('default', ['clean','svg_sprite', 'svgmin']);

};