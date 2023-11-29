/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function combinationSum4(nums, target) {
	const dp = new Array(target + 1).fill(0);
	dp[0] = 1;

	for (let i = 0; i <= target; i++) {
		for (let k = 0; k <= nums.length; k++) {
			if (i >= nums[k]) {
				dp[i] += dp[i - nums[k]];
			}
		}
	}
	return dp[target];
}
