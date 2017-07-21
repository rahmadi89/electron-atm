describe("Builder", function() {
  var Builder = require('../../src/controllers/builder.js');
  var b;
  var luno = '777';

  beforeEach(function() {
    b = new Builder(luno);
  });

  describe("build()", function(){
    it("should build empty message", function() {
      expect(b.build(undefined)).toEqual('');
    });

    it("should build solicited ready status message", function() {
      var object = {
        message_class: 'Solicited',
        message_subclass: 'Status',
        status_descriptor: 'Ready',
      };
      expect(b.build(object)).toEqual('22\x1C777\x1C\x1C9');
    });

  });
});
