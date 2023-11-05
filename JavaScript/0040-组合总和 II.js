/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
	const result = [],
		path = [],
		length = candidates.length;
	candidates.sort((a, b) => a - b);
	function backTracking(j, sum) {
		if (sum === target) {
			result.push([...path]);
		}
		for (let i = j; i < length; i++) {
			const num = candidates[i];
			if (i > j && num === candidates[i - 1]) {
				// 若当前元素和前一个元素相等 则本次循环结束，防止出现重复组合
				continue;
            }
            // 剪枝
			if (num > target - sum) {
				break;
			}
			path.push(num);
			backTracking(i + 1, sum + num);
			path.pop();
		}
	}
	backTracking(0, 0);
	return result;
}