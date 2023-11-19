/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeightII(stones) {
    const sum = stones.reduce((p, c) => p + c);
    const n = Math.floor(sum / 2);
    const dp = new Array(n + 1).fill(0);

    for (let i = 0, sn = stones.length; i < sn; i++) {
        for (let k = n; k >= stones[i]; k--) {
            dp[k] = Math.max(dp[k], dp[k - stones[i]] + stones[i]);
        }
    }

    return sum - dp[n] - dp[n];
}
