/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(text1, text2) {
	const [n1, n2] = [text1.length, text2.length];
	const dp = Array.from({ length: n1 + 1 }, _ => new Array(n2 + 1).fill(0));

	for (let i = 1; i <= n1; i++) {
		for (let k = 1; k <= n2; k++) {
			if (text1[i - 1] === text2[k - 1]) {
				dp[i][k] = dp[i - 1][k - 1] + 1;
			} else {
				dp[i][k] = Math.max(dp[i - 1][k], dp[i][k - 1]);
			}
		}
		console.table(dp);
	}

	return dp[n1][n2];
}
