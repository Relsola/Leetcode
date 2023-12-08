/**
 * @description 动态规划
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
	const n = prices.length;
	const dp = new Array(n).fill([0, 0]);
	dp[0] = [-prices[0], 0];
	for (let i = 0; i < n; i++) {
		dp[i] = [Math.max(dp[i - 1][0], -prices[i]), Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])];
	}
	return dp[n - 1][1];
}

/**
 * @description 贪心算法
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
	// 维护最小值
	let lowerPrice = prices[0];
	let profit = 0;
	for (let i = 1, n = prices.length; i < n; i++) {
		// 贪心地选择最小价格 遍历一趟获得最大利润
		const price = prices[i];
		if (price < lowerPrice) {
			lowerPrice = price;
		} else {
			profit = Math.max(profit, price - lowerPrice);
		}
	}
	return profit;
}
