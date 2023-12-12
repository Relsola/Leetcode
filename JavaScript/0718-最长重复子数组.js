/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findLength(nums1, nums2) {
	const [n1, n2] = [nums1.length, nums2.length];
	const dp = new Array(n2 + 1).fill(0);
	let result = 0;
	for (let i = 1; i <= n1; i++) {
		for (let k = n2; k > 0; k--) {
			if (nums1[i - 1] === nums2[k - 1]) {
				dp[k] = dp[k - 1] + 1;
			} else {
				dp[k] = 0;
			}
			result = Math.max(result, dp[k]);
		}
	}
	return result;
}
