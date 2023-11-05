/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function findSubsequences(nums) {
	const result = [],
		path = [],
		length = nums.length;
	function backTracking(startIndex) {
		if (path.length >= 2) {
			result.push([...path]);
		}
		const pathLast = path.at(-1) ?? -Infinity;
		// 同一父节点下的同层上使用过的元素就不能再使用了
		const uset = new Set();
		for (let i = startIndex; i < length; i++) {
			const num = nums[i];
			if (num < pathLast || uset.has(num)) {
				continue;
			}
			path.push(num);
			uset.add(num);
			backTracking(i + 1);
			path.pop();
		}
	}
	backTracking(0);
	return result;
}
