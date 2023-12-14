/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
	const [m, n] = [s.length, t.length];
	const dp = new Array(n + 1).fill(0);

	for (let i = 1; i <= m; i++) {
		let pre = 0,
			temp = 0;
		for (let k = 1; k <= n; k++) {
			// 备份一下当前状态（经过上层迭代后的）
			temp = dp[k];
			dp[k] = s[i - 1] === t[k - 1] ? pre + 1 : dp[k - 1];
			// 继续使用上一层状态更新参数用于当前层下一个状态
			pre = temp;
		}
	}
	return dp[n] === m;
}
