/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
function change(amount, coins) {
	const dp = new Array(amount + 1).fill(0);
	dp[0] = 1;

	for (let i = 0; i < coins.length; i++) {
		for (let k = coins[i]; k <= amount; k++) {
			dp[k] += dp[k - coins[i]];
		}
	}
	return dp[amount];
}
