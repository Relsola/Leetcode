/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
	const n = nums.length;
	const dp = new Array(n).fill(1);
	let result = 1;

	for (let i = 1; i < n; i++) {
		for (let k = 0; k < i; k++) {
			if (nums[i] > nums[k]) {
				dp[i] = Math.max(dp[i], dp[k] + 1);
			}
		}
		result = Math.max(result, dp[i]);
	}
	return result;
}
