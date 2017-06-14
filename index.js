#!/usr/bin/env node

'use strict';

var
// defaults
  consoleLog = false, // set true for metalsmith file and meta content logging
  devBuild = ((process.env.NODE_ENV || '').trim().toLowerCase() !== 'production'),
  pkg = require('./package.json'),

  // main directories
  dir = {
    base: __dirname + '/',
    plugins: __dirname + '/plugins/',
    source: './app/',
    dest: './build/'
  },

  // modules
  metalsmith = require('metalsmith'),
  markdown = require('metalsmith-markdown'),
  publish = require('metalsmith-publish'),
  collections = require('metalsmith-collections'),
  permalinks = require('metalsmith-permalinks'),
  inplace = require('metalsmith-in-place'),
  layouts = require('metalsmith-layouts'),
  sass = require('metalsmith-sass'),
  assets = require('metalsmith-assets'),
  browsersync = devBuild ? require('metalsmith-browser-sync') : null,

  // custom plugins
  debug = consoleLog ? require(dir.plugins + 'metalsmith-debug') : null,

  siteMeta = {
    devBuild: devBuild,
    version: pkg.version,
    name: 'Amsterdam',
    desc: 'Canvas CSS Sanctuary',
    author: 'abloom@drivecanvas.com',
    domain: devBuild ? 'http://127.0.0.1' : 'https://staging-amsterdam.herokuapp.com', // set domain
  },

  templateConfig = {
    engine: 'handlebars',
    directory: 'layouts/',
    partials: 'partials/',
    pattern: '**/*.html',
    default: 'styleguide.html'
  };

console.log((devBuild ? 'Development' : 'Production'), 'build, version', pkg.version);

var ms = metalsmith(dir.base)
  .clean(!devBuild) // clean folder before a production build
  .source(dir.source) // source folder (app/html/)
  .destination(dir.dest) // build folder (build/)
  .metadata(siteMeta) // add meta data to every page
  .use(publish()) // draft, private, future-dated
  .use(collections({ // determine page collection/taxonomy
    snowball: {
      pattern: 'snowball/**/*',
      sortBy: 'priority',
      reverse: true,
      refer: true,
      metadata: {
        layout: 'default.html'
      }
    },
    about: {
      pattern: 'start/**/*',
      sortBy: 'priority',
      reverse: true,
      refer: true,
      metadata: {
        layout: 'default.html'
      }
    }
  }))
  .use(markdown()) // convert markdown
  .use(permalinks({ // generate permalinks
    pattern: ':mainCollection/:title'
  }))
  .use(sass({
    outputStyle: 'expanded'
  }))
  .use(assets({ // copy views
    source: dir.source + 'views/',
    destination: './'
  }))
  .use(inplace(templateConfig)) // in-page templating
  .use(layouts(templateConfig)); // layout templating

if (debug) ms.use(debug()); // output page debugging information

if (browsersync) ms.use(browsersync({ // start test server
  server: dir.dest,
  files: [
    dir.source + '**/*',
    'layouts/**/*',
    'partials/**/*',
  ]
}));

ms
  .build(function(err) { // build
    if (err) throw err;
  });
