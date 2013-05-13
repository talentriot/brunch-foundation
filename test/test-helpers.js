// This file will be automatically required when using `brunch test` command.

var chai = require('chai');
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
  }
};
