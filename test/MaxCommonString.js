var assert = require('assert')

var MaxCommonString = require('../problems/MaxCommonString');
describe('MaxCommonString', function() {
  it('should return abcbcbcbcfw when input is asssdwabcbcbcbcfwfwfw, asw2sabcbcbcbcfwersf', function() {
      assert.equal('abcbcbcbcfw', MaxCommonString('asssdwabcbcbcbcfwfwfw', 'asw2sabcbcbcbcfwersf'));
  })
})