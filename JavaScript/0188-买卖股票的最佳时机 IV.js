/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(k, prices) {
	const n = prices.length,
		dp = new Array(2 * k + 1).fill(0);
	// dp 买入状态初始化
	for (let i = 1; i <= 2 * k; i += 2) {
		dp[i] = -prices[0];
	}

	for (let i = 1; i < n; i++) {
		for (let j = 1; j <= 2 * k; j++) {
			if (j & 1) {
				dp[j] = Math.max(dp[j], dp[j - 1] - prices[i]);
			} else {
				dp[j] = Math.max(dp[j], dp[j - 1] + prices[i]);
			}
		}
	}

	return dp[2 * k];
}
