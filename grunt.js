module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      all: ['grunt.js', 'src/**/*.js']
    },
    jshint: {
      options: {
        browser: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint src');

};