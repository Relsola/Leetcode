/**
 * @description 贪心算法
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
	const n = prices.length;
	let result = 0;
	for (let i = 1; i < n; i++) {
		const num = prices[i] - prices[i - 1];
		if (num > 0) {
			result += num;
		}
	}
	return result;
}

/**
 * @description 动态规划
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
	// 滚动数组
	// have: 第i天持有股票最大收益; notHave: 第i天不持有股票最大收益
	let n = prices.length,
		have = -prices[0],
		notHave = 0;
	for (let i = 1; i < n; i++) {
		have = Math.max(have, notHave - prices[i]);
		notHave = Math.max(notHave, have + prices[i]);
	}
	// 最终手里不持有股票才能保证收益最大化
	return notHave;
}
