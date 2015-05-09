module.exports = function(grunt) {

   "use strict";
   require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        clean: {
            directory: ["output/css"],
            temp :["<%= svg_sprite_path %>/*sprite.css*", "<%= png_sprite_path %>/*sprite.css*" ]
        },

        svg_sprite: {
            basic: {
                // Target basics 
                expand: true,
                cwd: '<%= input_path %>',
                src: ['**/*.svg'],
                dest: '<%= output_path %>',
                // Target options 
                options: {
                    shape:{
                            spacing: {         
                            padding: 5  
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
                    src: ['<%= svg_sprite_path %>/*.svg'],
                    dest: "<%= svg_sprite_path %>/compressed.svg"
                }]
            }
        },
        svg2png: {
        all: {
            files: [
                { cwd: '<%= svg_sprite_path %>/', src: ['**/*.svg'], dest: '<%= png_sprite_path %>' }
            ]
        }
        },
        //varaibles
        input_path: 'assets',
        output_path: 'output',
        svg_sprite_path: 'output/css/svg',
        png_sprite_path: 'output/css/png'
    });

    grunt.registerTask('default', ['clean:directory','svg_sprite', 'svgmin', 'svg2png', 'clean:temp']);

};