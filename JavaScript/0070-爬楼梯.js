/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
	if (n === 1) return 1;
	const dp = new Array(2);
	dp[0] = 1;
	dp[1] = 2;
	for (let i = 3; i <= n; i++) {
		let sum = dp[0] + dp[1];
		dp[0] = dp[1];
		dp[1] = sum;
	}
	return dp[1];
}
