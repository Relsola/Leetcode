/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
	const result = [],
		path = [],
		length = nums.length;
	nums.sort((a, b) => a - b);
	function backTracking(startIndex) {
		result.push([...path]);
		for (let i = startIndex; i < length; i++) {
			if (i > startIndex && nums[i] === nums[i - 1]) {
				continue;
			}
			path.push(nums[i]);
			backTracking(i + 1);
			path.pop();
		}
	}
	backTracking(0);
	return result;
}
