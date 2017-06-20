#!/usr/bin/env node

'use strict';

var consoleLog = false; // set true for metalsmith file and meta content logging
var devBuild = ((process.env.NODE_ENV || '').trim().toLowerCase() !== 'production');
var pkg = require('./package.json');

  // main directories
var dir = {
  base: __dirname + '/',
  plugins: __dirname + '/plugins/',
  source: './app/',
  dest: './build/'
};

  // modules
var Metalsmith = require('metalsmith');
var permalinks = require('metalsmith-permalinks');
var inplace = require('metalsmith-in-place');
var layouts = require('metalsmith-layouts');
var sass = require('metalsmith-sass');
var browsersync = devBuild ? require('metalsmith-browser-sync') : null;

// custom plugins
var registerHandlerbarsHelpers = require(dir.plugins + 'handlebars-helpers');
var debug = consoleLog ? require(dir.plugins + 'metalsmith-debug') : null;

registerHandlerbarsHelpers();

var siteMeta = {
  devBuild: devBuild,
  version: pkg.version,
  name: 'Amsterdam',
  desc: 'Canvas CSS Sanctuary',
  author: 'abloom@drivecanvas.com',
  domain: devBuild ? 'http://127.0.0.1' : 'https://staging-amsterdam.herokuapp.com',
};

var templateConfig = {
  engine: 'handlebars',
  directory: dir.source + 'layouts/',
  partials: dir.source + 'partials/',
};

console.log((devBuild ? 'Development' : 'Production'), 'build, version', pkg.version);

var ms = Metalsmith(dir.base)
  .clean(!devBuild)
  .source(dir.source)
  .destination(dir.dest)
  .metadata(siteMeta)
  .use(sass({
    outputStyle: 'expanded'
  }))
  .use(permalinks({
    pattern: ':mainCollection/:title'
  }))
  .use(inplace(templateConfig))
  .use(layouts(templateConfig));

if (debug) ms.use(debug());

if (browsersync) ms.use(browsersync({
  server: dir.dest,
  files: [
    dir.source + '**/*',
  ]
}));

ms
  .build(function(err) {
    if (err) throw err;
  });

if (!devBuild) {
  var express = require('express');
  var app = express();

  // set the port of our application
  // process.env.PORT lets the port be set by Heroku
  var port = process.env.PORT || 8080;

  // set the view engine to ejs
  app.set('view engine', 'ejs');

  // make express look in the public directory for assets (css/js/img)
  app.use(express.static(__dirname + '/build'));

  // set the home page route
  app.get('/', function(req, res) {

      // ejs render automatically looks in the views folder
      res.render('index');
  });

  app.listen(port, function() {
      console.log('Our app is running on http://localhost:' + port);
  });
}
