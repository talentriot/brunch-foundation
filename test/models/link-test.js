describe("Link Model", function() {
  var Link = require('models/link');
  var model, collection;
  beforeEach(function() {
    model = new Link.Model();
    collection = new Link.Collection();
  });
  describe("Model", function() {
    it('should have name, url and an external flag', function() {
      model.attributes.should.have.property('name');
      model.attributes.should.have.property('url');
      model.attributes.should.have.property('external').to.be.a('boolean');
    });
  });

  describe("Collection", function() {

    it('should have Link.Model as a model', function() {
      collection.model.should.eql(Link.Model);
    });
  });
  describe("Header Link Collection", function() {
    beforeEach(function() {
      collection.initializeHeaderLinks();
    });

    it('should have 4 links', function(){
      collection.models.should.have.length(4);
    });
    it('should have 3 external link', function(){
      collection.where({external: true}).should.have.length(3);
    });
  });
  describe('Docs Links', function() {
    beforeEach(function() {
      collection.initializeDocsLinks();
    });

    it('should have 10 links', function() {
      collection.models.should.have.length(10);
    });
    it('all links should not be external', function() {
      collection.where({external: true}).length.should.not.equal(collection.models.length);
    });
  });
});
