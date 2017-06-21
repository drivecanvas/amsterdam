'use strict';

// we would like you to use debug
var debug = require('debug')('metalsmith-boostrap-sass-loader');
var multimatch = require('multimatch');


// Expose `plugin`.
module.exports = plugin;


function plugin(opts) {
  if (!opts) {
    opts = {};
  }

  opts.pattern = opts.pattern || [];

  return function (files, metalsmith, done){

    setImmediate(done);
    Object.keys(files).forEach(function(file){
      if(multimatch(file, opts.pattern).length) {
        console.log('myplugin working on: %s', file);

        //
        // here would be your code
        //

      }

    });

  };
}
