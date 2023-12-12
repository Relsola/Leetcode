/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
function maxProfit(prices, fee) {
	const n = prices.length;
	const dp = Array.from({ length: n }, _ => Array(2).fill(0));
	dp[0][0] = 0 - prices[0];
	for (let i = 1; i < n; i++) {
		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
		dp[i][1] = Math.max(dp[i - 1][0] + prices[i] - fee, dp[i - 1][1]);
	}
	return Math.max(...dp[n - 1]);
}
