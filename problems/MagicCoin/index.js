function MagicCoin(input) {
    var ret = [];
    while(input > 0) {
        if (input%2) {
            ret.push('1');
            input = (input-1)/2
        }
        else {
            ret.push('2');
            input = (input-2)/2
        }
    }
    return ret.reverse().join('');
}

module.exports = MagicCoin;
