/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
	const result = [],
		path = [],
		length = nums.length,
		used = new Set();
	function backTracking(used) {
		if (path.length === length) {
			result.push([...path]);
			return;
		}
		for (let i = 0; i < length; i++) {
			const num = nums[i];
			//
			if (used.has(num)) {
				continue;
			}
			path.push(num);
			used.add(num);
			backTracking(used);
			path.pop();
			used.delete(num);
		}
	}
	backTracking(used);
	return result;
}
