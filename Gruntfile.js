module.exports = function(grunt) {
	'use strict';
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.initConfig({
		jshint: {
			files: [
				"q3.js"
			],

			options: {
				jshintrc: true
			}
		},

		browserify: {
			dev: {
				src: ['q3.js'],
				dest: 'bundle.js'
			}
		},

		watch: {
			files: [
				'q3.js'
			],

			tasks: [
				'jshint',
				'browserify:dev'
			]
		} 

	});

	grunt.registerTask('default', [
		'jshint',
		'browserify:dev',
		'watch'
	]);

};

