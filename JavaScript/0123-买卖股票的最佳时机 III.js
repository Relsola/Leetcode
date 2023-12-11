/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
	/**
        dp[i][0]: 无操作; 
        dp[i][1]: 第一次买入；
        dp[i][2]: 第一次卖出；
        dp[i][3]: 第二次买入；
        dp[i][4]: 第二次卖出；
     */
	const n = prices.length,
		dp = new Array(5).fill(0);
	dp[1] = -prices[0];
	dp[3] = -prices[0];
	for (let i = 0; i < n; i++) {
		dp[1] = Math.max(dp[1], dp[0] - prices[i]);
		dp[2] = Math.max(dp[2], dp[1] + prices[i]);
		dp[3] = Math.max(dp[3], dp[2] - prices[i]);
		dp[4] = Math.max(dp[4], dp[3] + prices[i]);
	}
	return dp[4];
}
