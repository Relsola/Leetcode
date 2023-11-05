/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
	const result = [],
		path = [],
		length = candidates.length;
	function backTacking(sum, j) {
		if (sum > target) {
			return;
		}
		if (sum === target) {
			result.push([...path]);
			return;
		}
		for (let i = j; i < length; i++) {
			const num = candidates[i];
			path.push(num);
			backTacking(sum + num, i);
			path.pop();
		}
	}
	backTacking(0, 0);
	return result;
}
