function Cross01String(input){
    var arr = input.split('');
    var max = 0;
    var temp = [];
    for(var i = 0; i < arr.length - 1; i++) {
        temp.push(arr[i])
        if(arr[i+1] != arr[i]) max = (temp.length + 1) > max ? (temp.length+1) : max;
        else {
            max = temp.length > max ? temp.length : max;
            temp.length = 0;
        }
    }
    return max;
}

module.exports = Cross01String;