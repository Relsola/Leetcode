/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function findMaxForm(strs, m, n) {
	const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
	let numOfZeros, numOfOnes;
	for (const str of strs) {
		numOfZeros = 0;
		numOfOnes = 0;

		for (const c of str) {
			c === '0' ? numOfZeros++ : numOfOnes++;
		}

		for (let i = m; i >= numOfZeros; i--) {
			for (let k = n; k >= numOfOnes; k--) {
				dp[i][k] = Math.max(dp[i][k], dp[i - numOfZeros][k - numOfOnes] + 1);
			}
		}
	}

	return dp[m][n];
}
