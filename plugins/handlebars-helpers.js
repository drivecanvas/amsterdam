'use strict';

var Handlebars = require('handlebars');

module.exports = function () {
  Handlebars.registerHelper('eq', function(val, val2, block) {
    if (val == val2) {
      return block(this);
    }
  });
}
