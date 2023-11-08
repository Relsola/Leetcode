/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
	if (n <= 1) return n;
	const dp = new Array(n);
	dp[0] = 0;
	dp[1] = 1;
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	// console.log(dp);
	return dp[n];
}
