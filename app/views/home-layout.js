var View = require('./view').View;
var template = require('./templates/home-layout');

module.exports = View.extend({
  template: template,
  id: 'layout',

  initialize: function() {
    this.on('route', function(route) {
      this.renderContent(route);
    }, this);
    var Header = require('./home/header'),
      Link = require('models/link');
    var links = new Link.Collection();
    links.initializeHeaderLinks();
    var header = new Header({collection: links});
    this.setView('#header', header, true);
    var Footer = require('./home/footer');
    var footer = new Footer({collection: links});
    this.setView("footer", footer, true);
  },
  renderContent: function(ContentView) {
    ontentView = ContentView || require('./home/index');
    var content = new ContentView();
    this.setView('#content', content).render();
  }
});
