var assert = require('assert')

var MagicCoin = require('../problems/MagicCoin');
describe('MagicCoin', function() {
      it('should return 122 when input is 10', function() {
          assert.equal('122', MagicCoin(10));
      })
})