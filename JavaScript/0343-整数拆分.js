/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
    const dp = new Array(n + 1).fill(0);
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        for (let k = 1; k <= i / 2; k++) {
            dp[i] = Math.max(dp[i], dp[i - k] * k, (i - k) * k);
        }
    }
    return dp[n];
}
