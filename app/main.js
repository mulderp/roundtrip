var $ = require('jquery-untouched');
var Backbone = require('backbone');
Backbone.$ = $;

var $ = require('jquery-untouched');
var Backbone = require('backbone');
Backbone.$ = $;

var Pages = require('routers/pages');

$(document).ready(function() {
  var pages = new Pages();
  Backbone.history.start({pushState: true});
});
