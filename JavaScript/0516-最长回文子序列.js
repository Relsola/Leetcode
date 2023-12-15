/**
 * @param {string} s
 * @return {number}
 */
function longestPalindromeSubseq(s) {
	const n = s.length;
	const dp = Array.from({ length: n }, _ => new Array(n).fill(0));

	for (let i = 0; i < n; i++) {
		dp[i][i] = 1;
	}

	for (let i = n - 1; i >= 0; i--) {
		for (let k = i + 1; k < n; k++) {
			dp[i][k] =
				s[i] === s[k]
					? dp[i + 1][k - 1] + 2
					: Math.max(dp[i + 1][k], dp[i][k - 1]);
		}
	}

	return dp[0][n - 1];
}
