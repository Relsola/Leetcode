/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct(s, t) {
	const [m, n] = [s.length, t.length];
	const dp = Array.from({ length: m + 1 }, _ => new Array(n + 1).fill(0));

	for (let i = 0; i <= m; i++) {
		dp[i][0] = 1;
	}

	for (let i = 1; i <= m; i++) {
		for (let k = 1; k <= n; k++) {
			dp[i][k] =
				s[i - 1] === t[k - 1]
					? dp[i - 1][k - 1] + dp[i - 1][k]
					: dp[i - 1][k];
		}
	}

	return dp[m][n];
}
