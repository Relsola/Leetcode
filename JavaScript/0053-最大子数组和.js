/**
 * @description 贪心算法
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
	const length = nums.length;
	let result = -Infinity;
	let count = 0;
	for (let i = 0; i < length; i++) {
		count += nums[i];
		if (count > result) {
			result = count;
		}
		if (count < 0) {
			count = 0;
		}
	}
	return result;
}

/**
 * @description 动态规划
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
	const n = nums.length;
	const dp = new Array(n).fill(0);
	dp[0] = nums[0];
	let max = dp[0];
	for (let i = 1; i < n; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
		max = Math.max(max, dp[i]);
	}
	return max;
}
