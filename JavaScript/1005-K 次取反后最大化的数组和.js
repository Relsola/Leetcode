/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function largestSumAfterKNegations(nums, k) {
	nums.sort((a, b) => Math.abs(b) - Math.abs(a));
	const n = nums.length - 1;
	let sum = 0;
	for (let i = 0; i <= n; i++) {
		// 负数取反（k 数量足够时）
		if (nums[i] < 0 && k-- > 0) {
			nums[i] = -nums[i];
		}
		sum += nums[i];
	}
	// k 有多余的（k若消耗完则应为 -1）
	if (k % 2 > 0) {
		// 减去两倍的最小值（因为之前加过一次）
		sum -= 2 * nums[n];
	}
	return sum;
}

largestSumAfterKNegations([2, -3, -1, 5, -4], 2);
