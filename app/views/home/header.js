var View = require('../view').View,
  template = require('./templates/header');

var LinksView = View.extend({
  template: require('./templates/link'),
  tagName: 'li',
  serialize: function() {
    return this.model.toJSON();
  }
});

module.exports = View.extend({
  template: template,
  el: false,
  keep: true,

  beforeRender: function() {
    this.iterateOverList(LinksView, '.links');
  },
  afterRender: function() {
    var divider = $('<li></li>').addClass('divider');
    this.$('.links li').after(divider.clone());
    this.$('ul.links').prepend(divider.clone());
  }
});
