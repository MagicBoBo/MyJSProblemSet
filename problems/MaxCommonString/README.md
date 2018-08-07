求最大公共子串

**输入描述**
> 输入包括一行,两个字符串。

**输出描述**
> 输出最长公共子串。

**输入例子**
> asssdwabcbcbcbcfwfwfw asw2sabcbcbcbcfwersf

**输出例子**
> abcbcbcbcfw

**思路**
> 用动归来做，用一个dp数组来保存公共子串的公共情况，如果```s1[i] !== s2[j], dp[i][j] = 0``` 如果```s1[i] === s2[j], dp[i][j] = dp[i-1][j-1] + 1```