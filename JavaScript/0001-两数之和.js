// map结构
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
	const map = new Map(),
		n = nums.length;

	for (let i = 0; i < n; i++) {
		const num = nums[i];
		const index = map.get(target - num);
		if (index === void 0) {
			map.set(num, i);
			continue;
		}
		return [index, i];
	}
}
