/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
	const dp = new Array(Math.max(2, n));
	dp[0] = 0;
	dp[1] = 1;
	for (let i = 2; i < n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	// console.log(dp);
	return dp[n];
}
