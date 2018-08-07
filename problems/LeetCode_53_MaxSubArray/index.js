function MaxSubArray(arr) {
  var max = arr[0], sum = arr[0];
  for (var i = 1; i < arr.length; i ++) {
    sum = getMax(arr[i] + sum, arr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
function getMax(a, b) {
  return a > b ? a : b;
}
module.exports = MaxSubArray