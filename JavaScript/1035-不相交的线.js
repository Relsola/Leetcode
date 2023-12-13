/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function maxUncrossedLines(nums1, nums2) {
	const [m, n] = [nums1.length, nums2.length];
	const dp = Array.from({ length: m + 1 }, _ => new Array(n + 1).fill(0));

	for (let i = 1; i <= m; i++) {
		for (let k = 1; k <= n; k++) {
			if (nums1[i - 1] === nums2[k - 1]) {
				dp[i][k] = dp[i - 1][k - 1] + 1;
			} else {
				dp[i][k] = Math.max(dp[i - 1][k], dp[i][k - 1]);
			}
		}
	}

	return dp[m][n];
}
