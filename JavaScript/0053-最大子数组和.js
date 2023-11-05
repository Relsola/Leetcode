/**
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

maxSubArray([-1, -1, -1]);
