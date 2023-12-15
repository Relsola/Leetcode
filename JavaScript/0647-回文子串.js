/**
 * @description 动态规划
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
	const n = s.length;
	const dp = Array.from({ length: n }, _ => new Array(n).fill(false));
	let count = 0;

	for (let i = 0; i < n; i++) {
		for (let k = 0; k <= i; k++) {
			if (s[k] === s[i]) {
				count += dp[k][i] = i - k < 2 ? true : dp[k + 1][i - 1];
			}
		}
	}

	return count;
}

/**
 * @description 双指针法
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
	const n = s.length;
	let count = 0;

	for (let i = 0; i < 2 * n - 1; i++) {
		let left = i >> 1;
		let right = left + (i & 1);

		while (left >= 0 && right < n && s[left] === s[right]) {
			count++;
			left--;
			right++;
		}
	}

	return count;
}
