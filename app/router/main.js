var getMainRegion = _.once(function() {
    var MainLayout = require('views/home-layout');
    var layout = new MainLayout({el: $('div#app')});
    // $('body').empty().append(layout.el);
    layout.render();
    return layout;
  });
function renderRegion(region) {
  var layout = getMainRegion();
  layout.trigger('route', region);
  return layout;
}

// Defining the main application router
module.exports = Backbone.Router.extend({
  routes: {
    '': 'index',
    'docs': 'docs'
  },

  index: function() {
    renderRegion(require('views/home/index'));
  },
  docs: function() {
    renderRegion(require('views/home/docs'));
  }
});
