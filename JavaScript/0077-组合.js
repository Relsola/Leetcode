/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
	const result = [],
		path = [];
	function backTracking(n, k, startIndex) {
		const length = path.length;
		if (length === k) {
			result.push([...path]);
			return;
		}
		// 剪枝
		for (let i = startIndex; i <= n + length - k + 1; i++) {
			path.push(i);
			backTracking(n, k, i + 1);
			path.pop();
		}
	}
	backTracking(n, k, 1);
	return result;
}
