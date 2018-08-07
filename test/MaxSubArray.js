var assert = require('assert')

var MaxSubArray = require('../problems/LeetCode_53_MaxSubArray');
describe('LeetCode_53_MaxSubArray', function() {
  it('should return 18 when input is [1,-2,3,10,-4,7,2,-5]', function() {
      assert.equal(18 , MaxSubArray([1,-2,3,10,-4,7,2,-5]));
  })
})