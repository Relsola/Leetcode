/**
 * @param {number[]} nums
 * @return {number[]}
 */
function nextGreaterElements(nums) {
	const n = nums.length;
	const stack = [];
	const result = new Array(n).fill(-1);

	for (let i = 0; i < n * 2; i++) {
		while (stack.length && nums[i % n] > nums[stack.at(-1)]) {
			const index = stack.pop();
			result[index] = nums[i % n];
		}
		stack.push(i % n);
	}
	return result;
}
