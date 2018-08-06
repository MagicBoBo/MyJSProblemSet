var assert = require('assert')

var StringFragment = require('../problems/StringFragment');
describe('StringFragment', function() {
      it('should return 2.25 when input is aaabbaaac', function() {
          assert.equal('2.25', StringFragment('aaabbaaac'));
      })
})