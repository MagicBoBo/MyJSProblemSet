function StringFragment(input) {
    var arr = input.match(/(\w)\1*/g);
    var total = 0;
    for(var i = 0; i < arr.length; i ++) {
        total += arr[i].length;
    }
    return (total/arr.length).toFixed(2);
}

module.exports = StringFragment;