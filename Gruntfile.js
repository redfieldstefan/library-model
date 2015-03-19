module.exports = function(grunt) {
	'use strict';
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');

	var srcFiles = [ 'index.js', 'library-modules/library.js', 'library-modules/shelf.js', 'library-modules/book.js', 'library-modules/noise.js', 'Gruntfile.js' ];

	grunt.initConfig({
		jshint: {
			files: srcFiles,

			options: {
				jshintrc: true
			}
		},

		watch: {
			files: srcFiles,
			tasks: [
				'jshint',
				'jscs'
			]
		},

		jscs: {
			src: srcFiles,

			options: {
				config: '.jscsrc'
			}
		}

	});

	grunt.registerTask('default', [
		'jshint',
		'jscs',
		'watch'
	]);

};