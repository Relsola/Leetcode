/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
	if (amount === 0) {
		return 0;
	}
	const dp = new Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for (let i = 0, n = coins.length; i < n; i++) {
		for (let k = coins[i]; k <= amount; k++) {
			dp[k] = Math.min(dp[k - coins[i]] + 1, dp[k]);
		}
	}

	return dp[amount] === Infinity ? -1 : dp[amount];
}
