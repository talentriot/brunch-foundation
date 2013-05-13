var Model = require('./model'),
  Collection = require('./collection'),
  Link = {};

Link.Model = Model.extend({
  defaults: {
    name: '',
    url: '',
    external: false
  }
});
Link.Collection = Collection.extend({
  model: Link.Model,
  initializeHeaderLinks: function(data) {
    if (!data) {
      data = [{
        name: 'Docs',
        url: '/docs'
      },
      {
        name: 'Brunch',
        url: '//brunch.io',
        external: true
      },
      {
        name: 'Fork me on Github',
        url: '//github.com/smazurov/brunch-marcos',
        external: true
      },
      {
        name: 'Tests',
        url: '/test/',
        external: true
      }];
    }
    this.reset(data);
  },
  initializeDocsLinks: function(data) {
    if (!data) {
      data = [{
        name: 'README',
        url: '/'
      },
      {
        name: 'Brunch-Marcos Issues',
        url: '//github.com/smazurov/brunch-marcos/issues',
        external: true
      },
      {
        name: 'LayoutManager',
        url: 'http://tbranyen.github.com/backbone.layoutmanager/',
        external: true
      },
      {
        name: 'Backbone.js',
        url: 'http://backbonejs.org/',
        external: true
      },
      {
        name: 'Lo-Dash',
        url: 'http://lodash.com/docs',
        external: true
      },
      {
        name: 'Stylus',
        url: 'http://learnboost.github.com/stylus/',
        external: true
      },
      {
        name: 'Brunch Docs',
        url: '//brunch.readthedocs.org/',
        external: true
      },
      {
        name: 'Brunch Issues',
        url: '//github.com/brunch/brunch/issues',
        external: true
      },
      {
        name: 'Brunch Skeletons',
        url: '//github.com/brunch/brunch/wiki/Skeletons',
        external: true
      },
      {
        name: 'Brunch Plugins',
        url: '//github.com/brunch/brunch/wiki/Plugins',
        external: true
      }];
    }
    this.reset(data);
  }
});
module.exports = Link;
