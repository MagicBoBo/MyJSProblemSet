var assert = require('assert')

var Cross01String = require('../problems/Cross01String');
describe('Cross01String', function() {
  it('should return 3 when input is 111101111', function() {
      assert.equal(3, Cross01String('111101111'));
  })
})