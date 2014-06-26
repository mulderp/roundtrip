    var Backbone = require('backbone');
    var $ = Backbone.$;

    var Layout = require('views/layout');

    Pages = Backbone.Router.extend({

      routes: {
        'welcome': 'welcome',
        'portfolio': 'portfolio',
        'contact': 'contact',
        '': 'welcome'
      },

      welcome: function() {
        this.layout.show('#welcome');
        this.layout.hide(['#portfolio', '#contact']);
      },

      portfolio: function() {
        this.layout.show('#portfolio');
        this.layout.hide(['#welcome', '#contact']);
      },

      contact: function() {
        this.layout.show('#contact');
        this.layout.hide(['#portfolio', '#welcome']);
      },

      initialize: function() {
        this.layout = new Layout();
        this.layout.setElement($('#page'));
        this.layout.show('#welcome');
      }

    });
    module.exports = Pages


