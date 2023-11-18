/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    const dp = new Array(m).fill(1).map(v => new Array(n).fill(1));
    // 初始化 dp
    /*   
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }

    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    } 
    */
    for (let i = 1; i < m; i++) {
        for (let k = 1; k < n; k++) {
            dp[i][k] = dp[i - 1][k] + dp[i][k - 1];
        }
    }
    return dp[m - 1][n - 1];
}
