module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['public/assets/css/sass/*.scss'],
                tasks: 'sass'
            },
            concat: {
                files: ['<%= concat.dist.src %>', '<%= concat.dist.dest %>'],
                tasks: 'concat'
            },
            uglify: {
                files: ['<%= uglify.build.src %>', '<%= uglify.build.dest %>'],
                tasks: 'uglify'
            },
            js: {
                files: ['public/assets/js/**', 'src/assets/js/*.js'],
                tasks: ['jshint']
            }
        },
        sass: {
            dist: {
                files: {
                    'public/assets/css/happylager.css': 'public/assets/css/sass/happylager.scss'
                }
            }
        },
        imageoptim: {
              myTask: {
                  src: ['public/assets/site', 'public/assets/images']
              }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'public/assets/js/master.js',
                dest: 'public/assets/js/master.min.js'
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['public/assets/js/jquery-1.10.2.js', 'public/assets/js/plugins/*.js', 'public/assets/js/main.js'],
                dest: 'public/assets/js/master.js'
            }
        },
        jshint: {
            all: ['gruntfile.js', 'src/js/main.js']
        },
        penthouse: {
          extract : {
              outfile : './craft/templates/_includes/penthouse.css',
              // outfile : './public/assets/css/penthouse.css',
              css : './public/assets/css/happylager.css',
              url : 'http://dev.happylager.com/',
              width : 1300,
              height : 900
          },
        },


    });



    //Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-imageoptim');
    grunt.loadNpmTasks('grunt-criticalcss');
    grunt.loadNpmTasks('grunt-penthouse');


    //Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    // Optimize images.
    grunt.registerTask('img', ['imageoptim']);
    grunt.registerTask('crit', ['penthouse']);

    // Default task(s).
    grunt.registerTask('default', ['sass','concat', 'uglify', 'jshint', 'watch', 'penthouse']);

};
