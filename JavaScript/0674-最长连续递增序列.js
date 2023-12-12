/**
 * @description 动态规划
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
	const n = nums.length;
	const dp = new Array(n).fill(1);

	for (let i = 0; i < n - 1; i++) {
		if (nums[i + 1] > nums[i]) {
			dp[i + 1] = dp[i] + 1;
		}
	}

	return Math.max(...dp);
}

/**
 * @description 贪心算法
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
	if (nums.length === 1) {
		return 1;
	}

	let maxLen = 1,
		curMax = 1,
		cur = nums[0];

	for (const num of nums) {
		if (num > cur) {
			curMax += 1;
			maxLen = Math.max(maxLen, curMax);
		} else {
			curMax = 1;
		}
		cur = num;
	}
	return maxLen;
}
