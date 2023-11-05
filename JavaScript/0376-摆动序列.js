/**
 * @description 贪心
 * @param {number[]} nums
 * @return {number}
 */
function wiggleMaxLength(nums) {
	const length = nums.length;
	if (length <= 1) {
		return length;
	}
	let result = 1,
		preDiff = 0,
		curDiff = 0;
	for (let i = 0; i < length - 1; i++) {
		curDiff = nums[i + 1] - nums[i];
		if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
			result++;
			preDiff = curDiff;
		}
	}
	return result;
}

/**
 * @description 动态规划
 * @param {number[]} nums
 * @return {number}
 */
function wiggleMaxLength(nums) {
	const length = nums.length;
	if (length <= 1) {
		return length;
	}
	// 考虑前i个数，当第i个值作为峰谷时的情况（则第i-1是峰顶）
	let down = 1;
	// 考虑前i个数，当第i个值作为峰顶时的情况（则第i-1是峰谷）
	let up = 1;
	for (let i = 1; i < length; i++) {
		if (nums[i] < nums[i - 1]) {
			down = Math.max(up + 1, down);
		}
		if (nums[i] > nums[i - 1]) {
			up = Math.max(down + 1, up);
		}
	}
	return Math.max(down, up);
}
