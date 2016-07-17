module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist'],
    uglify: {
      my_target: {
        options: {
          sourceMap: true
        },
        files: {
          'dist/pattern-validators.min.js': ['src/pattern-validators.js']
        }
      }
    },
    copy: {
        main: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['pattern-validators.js'],
                dest: 'dist/'
            }]
        }
    }
  });

  grunt.registerTask('build', ['clean', 'uglify', 'copy']);

};