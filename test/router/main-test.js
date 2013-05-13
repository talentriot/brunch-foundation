describe('Main Router', function() {
  var MainRouter = require('router/main');
  var router = new MainRouter();
  it('should route to home correctly', function() {
    "/".should.route.to(new MainRouter(), "index");
  });
  it('should route to docs correctly', function() {
    "/docs".should.route.to(new MainRouter(), "docs");
  });
});
