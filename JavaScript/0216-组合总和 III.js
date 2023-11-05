/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k, n) {
	const result = [],
		path = [];
	function backTracking(sum, startIndex) {
		// 剪枝
		if (sum > n) {
			return;
		}
		const length = path.length;
		if (length === k && sum === n) {
			result.push([...path]);
			return;
		}
		for (let i = startIndex; i <= 9 - k + length + 1; i++) {
			path.push(i);
			backTracking(sum + i, i + 1);
			path.pop();
		}
	}
	backTracking(0, 1);
	return result;
}
