//var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

/*global module:false */
module.exports = function (grunt) {
  'use strict';

  // borrowed from Angular generator
  var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
  };

  // load grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    connect: {
      options: {
        hostname: 'localhost',
        port: 9000,
        livereload: true
      },
      first: {
        options: {
          base: 'gitandlunch',
          middleware: function (connect) {
            return [
              mountFolder(connect, '.tmp'),
              mountFolder(connect, 'gitandlunch')
            ];
          },
          livereload: true
        }
      },
      second: {
        options: {
          base: 'gitdistributed',
          middleware: function (connect) {
            return [
              mountFolder(connect, '.tmp'),
              mountFolder(connect, 'gitdistributed')
            ];
          },
          open: true,
          livereload: true
        }
      },
    },
    copy: {
      first: {
        src: 'js/*',
        dest: 'gitandlunch/'
      },
      second: {
        src: 'js/*',
        dest: 'gitdistributed/'
      }
    },
    watch: {
      mdpress: {
        files: [
          'gitandlunch.md',
          'themes/{,*/}*.html',
          'themes/{,*/}*.css'
        ],
        tasks: ['shell:compile', 'copy:first'],
        options: {
          livereload: true
        }
      },
      mdpress2: {
        files: [
          'gitdistributed.md',
          'themes/{,*/}*.html',
          'themes/{,*/}*.css'
        ],
        tasks: ['shell:compile2', 'copy:second'],
        options: {
          livereload: true,
          open: true
        }
      },
      gitdistributed: {
        files: [
          'gitdistributed/index.html'
        ],
        options: {
          livereload: true,
          open: true
        }
      }
    },
    shell: {
      compile: {
        command : 'mdpress gitandlunch.md -s mytheme'
      },
      compile2: {
        command : 'mdpress gitdistributed.md -s mytheme'
      }
    }
  });

  grunt.registerTask('compile', ['shell:compile']);
  grunt.registerTask('default', ['compile']);
  grunt.registerTask('server', [
    'shell:compile',
    'copy:first',
    'connect:first',
    'watch:mdpress',
  ]);

  grunt.registerTask('server2', [
    'shell:compile2',
    'copy:second',
    'connect:second',
    'watch:mdpress2',
    'watch:gitdistributed'
  ]);
};
