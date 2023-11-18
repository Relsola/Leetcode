/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
    const n = cost.length;
    const dp = new Array(n).fill(0);
    for (let i = 2; i <= n; ++i) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[n];
}

// 不使用 dp 数组
function minCostClimbingStairs(cost) {
    let dpBefore = 0,
        dpAfter = 0;
    for (let i = 2, n = cost.length; i <= n; i++) {
        let dpi = Math.min(dpBefore + cost[i - 2], dpAfter + cost[i - 1]);
        dpBefore = dpAfter;
        dpAfter = dpi;
    }
    return dpAfter;
}
