module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            build: {
                src: 'js/app.js',
                dest: 'public/bundle.js'
            }
        },
        watch: {
            scripts: {
                files: ["js/*.js", "Gruntfile.js"],
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

    // grunt.registerTask('default', ['uglify']);


};
