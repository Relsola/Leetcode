/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
	const result = [],
		path = [],
		length = nums.length;

	function backTracking(startIndex) {
		result.push([...path]);
		for (let i = startIndex; i < length; i++) {
			path.push(nums[i]);
			backTracking(i + 1);
			path.pop();
		}
	}
	backTracking(0);
	return result;
}
