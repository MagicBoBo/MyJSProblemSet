function MaxCommonString(s1, s2) {
  var m = s1.length, n = s2.length;
  var dp = Array.apply(null, new Array(m)).map(
      ()=> Array.apply(null, new Array(n)).map(() => 0)
    ),
      max = 0, index = -1;
  for (var i = 0; i < m; i ++) {
    for (var j = 0; j < n; j ++) {
      var c1 = s1.charCodeAt(i),
          c2 = s2.charCodeAt(j);
      if (c1 === c2) {
        if(0 === i || 0 === j) {
          dp[i][j] = 1;
        }
        else {
          dp[i][j] = dp[i-1][j-1] + 1;
        }
        max = dp[i][j] > max ? (index = i ,dp[i][j]) : max;
      }
    }
  }
  if (!~index) return '';
  return s1.slice(index - max + 1,index+1);
}

module.exports = MaxCommonString;