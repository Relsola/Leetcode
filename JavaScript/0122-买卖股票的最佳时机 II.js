/**
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
