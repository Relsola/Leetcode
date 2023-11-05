/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
	nums.sort((a, b) => a - b);
	const result = [],
		path = [],
		length = nums.length,
		used = new Array(length).fill(true);

	function backTracking() {
		if (path.length === length) {
			result.push([...path]);
			return;
		}
		for (let i = 0; i < length; i++) {
			if (i > 0 && nums[i] === nums[i - 1] && used[i - 1]) {
				continue;
			}
			if (used[i]) {
				path.push(nums[i]);
				used[i] = false;
				backTracking();
				used[i] = true;
				path.pop();
			}
		}
	}
	backTracking();
	return result;
}
