    var Backbone = require('backbone');
    var _ = require('underscore');

    var Layout = Backbone.View.extend({

      show: function(el) {
        this.$el.find(el).removeClass('hidden');
        this.$el.find(el).addClass('visible');
      },

      hide: function(el) {
        var hideOne = _.bind(function(e) {
            this.$el.find(e).addClass('hidden');
            this.$el.find(e).removeClass('visible');
          }, this);
        el.forEach(hideOne);
      },

      showPortfolio: function() {
        // ..
      }

  });
  module.exports = Layout;
