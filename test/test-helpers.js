// This file will be automatically required when using `brunch test` command.

/*!
 * Provide check for fail function.
 */

module.exports = {
  // assert: chai.assert,
  expect: chai.expect,
  should: chai.should,
  // $: require('jquery'),
  err: function (fn, msg) {
    try {
      fn();
      throw new chai.AssertionError({ message: 'Expected an error' });
    } catch (err) {
      chai.expect(err.message).to.equal(msg);
    }
  },

  init: function() {
    require('test/models/link-test');
    require('test/router/main-test');
    require('test/views/home-layout-test');
    require('test/views/view-test');
  }
};
