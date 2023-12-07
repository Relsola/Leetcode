/**
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
	const goodsNum = Math.sqrt(n) >> 0;
	const dp = new Array(n + 1).fill(Infinity);
	dp[0] = 0;
	for (let i = 1; i <= goodsNum; i++) {
		let val = i ** 2;
		for (let k = val; k <= n; k++) {
			dp[k] = Math.min(dp[k], dp[k - val] + 1);
		}
	}
	return dp[n];
}
