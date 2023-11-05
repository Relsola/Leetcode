/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
	if (digits === "") {
		return [];
	}
	const strMap = {
		1: [],
		2: ["a", "b", "c"],
		3: ["d", "e", "f"],
		4: ["g", "h", "i"],
		5: ["j", "k", "l"],
		6: ["m", "n", "o"],
		7: ["p", "q", "r", "s"],
		8: ["t", "u", "v"],
		9: ["w", "x", "y", "z"]
	};
	const result = [],
		path = [];
	function backTracking(curIndex) {
		if (curIndex === digits.length) {
			result.push(path.join(""));
			return;
		}
		for (const char of strMap[digits[curIndex]]) {
			path.push(char);
			backTracking(curIndex + 1);
			path.pop();
		}
	}
	backTracking(0);
	return result;
}
