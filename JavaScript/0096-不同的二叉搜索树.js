/**
 * @param {number} n
 * @return {number}
 */
function numTrees(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = dp[1] = 1;
    /**
        dp[i]: i个节点对应的种树
        dp[0]: -1; 无意义；
        dp[1]: 1;
        ...
        dp[i]: 2 * dp[i - 1] +
            (dp[1] * dp[i - 2] + dp[2] * dp[i - 3] + ... + dp[i - 2] * dp[1]); 从1加到i-2
     */
    for (let i = 2; i <= n; i++) {
        for (let k = 1; k <= i; k++) {
            dp[i] += dp[k - 1] * dp[i - k];
        }
    }
    return dp[n];
}
