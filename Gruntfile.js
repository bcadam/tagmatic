module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                // options: {
                //     transform: [
                //         ["uglify", {
                //             loose: "all"
                //         }]
                //     ]
                // },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "js/bundle.js": ["js/app.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["js/*.js"],
                tasks: ["browserify"]
            }
        },
        express: {
            options: {
                port: 5000
            },
            dev: {
                options: {
                    script: 'index.js'
                }
            },
            prod: {
                options: {
                    script: 'index.js',
                    node_env: 'production'
                }
            },
            test: {
                options: {
                    script: 'index.js'
                }
            }
        }

        // ,
        // uglify: {
        //     options: {
        //         mangleProperties: true,
        //         reserveDOMCache: true
        //     },
        //     my_target: {
        //         files: {
        //             'js/mangle.min.js': ['js/bundle.js']
        //         }
        //     }
        // }

        
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // grunt.registerTask("default", ["watch"]);
    //grunt.registerTask('myServer', ['express', 'express-keepalive']);
    grunt.registerTask('default', ['express:dev', 'watch']);
    grunt.registerTask('serve', ['express:dev', 'watch']);
    grunt.registerTask("build", ["browserify"]);

};
