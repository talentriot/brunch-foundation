require('lib/view_helpers');

// Layout manager config to use our templates correctly
Backbone.Layout.configure({
  fetch: function (path) {
    return path;
  },
  render: function(template, context) {
    return template(context);
  }
});

// Base class for all views
var View = Backbone.Layout.extend({
  iterateOverList: function(viewObj, selector, list) {
    list = list || this.collection.models;
    viewObj = viewObj || View;
    // if selector is an array, its really a list
    if (_.isArray(selector)) {
      list = selector;
    }
    // if view object is a string its really a selector and we don't have a view
    if (_.isString(viewObj)) {
      selector = viewObj;
      viewObj = View;
    // otherwise if its an array then its really a list
    // and we still don't have a view
    } else if (_.isArray(viewObj)) {
      list = viewObj;
      viewObj = View;
    }

    // Iterate over the passed list and create a view for each item.
    _.each(list, function(model) {
      var childView = new viewObj({model: model});
      if (_.isString(selector)) {
        this.setView(selector, childView, true);
      } else {
        this.setView(childView, true);
      }
    }, this);
  }
});

// we specificially export a View so we can set up type specific views i.e
// list view, region view, etc
module.exports = {View: View};
