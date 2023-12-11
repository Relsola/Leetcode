/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
	const n = prices.length,
		dp = new Array(4).fill(0);
	dp[0] = -prices[0];

	for (let i = 1; i < n; i++) {
		// 缓存上一次的状态
		const temp = dp[0];
		const temp1 = dp[2];
		dp[0] = Math.max(dp[0], Math.max(dp[3] - prices[i], dp[1] - prices[i])); // 持有状态
		dp[1] = Math.max(dp[1], dp[3]); // 今天不操作且不持有股票
		dp[2] = temp + prices[i]; // 今天卖出股票
		dp[3] = temp1; // 冷冻期
	}
	return Math.max(...dp);
}
