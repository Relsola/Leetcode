/**
 * @param  {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
	const n = nums.length;
	const result = new Array(n);
	let left = 0,
		right = n - 1,
		index = n - 1;

	// 原数组从小到大排序，一定能找到最大值
	while (left <= right) {
		const l = nums[left] ** 2;
		const r = nums[right] ** 2;
		if (l > r) {
			result[index--] = l;
			left++;
		} else {
			result[index--] = r;
			right--;
		}
	}

	return result;
}

/* 
function sortedSquares(nums) {
	return nums.map(item => item ** 2).sort((a, b) => a - b);
}
*/
