/**
 * @description 动态规划
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
	const n = s.length;
	const dp = new Array(n + 1).fill(false);
	dp[0] = true;
	for (let i = 1; i <= n; i++) {
		for (let k = 0; k < i; k++) {
			const tempStr = s.substring(k, i);
			if (wordDict.includes(tempStr) && dp[k] === true) {
				dp[i] = true;
				break;
			}
		}
	}
	return dp[n];
}

/**
 * @description 记忆化回溯
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
	// 只需要记忆结果为false的情况
	const memory = [];
	const n = s.length;

	function backTracking(index, memory) {
		if (index >= n) {
			return true;
		}
		if (memory[index] === false) {
			return false;
		}
		for (let i = index + 1; i <= n; i++) {
			const str = s.substring(index, i);
			if (wordDict.includes(str) && backTracking(i, memory)) {
				return true;
			}
		}
		memory[index] = false;
		return false;
	}

	return backTracking(0, memory);
}
