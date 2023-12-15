/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
	const [m, n] = [word1.length, word2.length];
	const dp = Array.from({ length: m + 1 }, _ => new Array(n + 1).fill(0));

	for (let i = 1; i <= m; i++) {
		dp[i][0] = i;
	}

	for (let k = 1; k <= n; k++) {
		dp[0][k] = k;
	}

	for (let i = 1; i <= m; i++) {
		for (let k = 1; k <= n; k++) {
			dp[i][k] =
				word1[i - 1] === word2[k - 1]
					? dp[i - 1][k - 1]
					: Math.min(
							dp[i - 1][k] + 1,
							dp[i][k - 1] + 1,
							dp[i - 1][k - 1] + 1
					  );
		}
	}

	return dp[m][n];
}
