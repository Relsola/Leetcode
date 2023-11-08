/**
 * @param {string} s
 * @return {number}
 */
function findTheLongestBalancedSubstring(s) {
	let l = 0,
		r = 0,
		index = 0,
		result = 0;
	const n = s.length - 1;
	while (index < n && s[index] === "1") index++;
	if (index >= n) return 0;
	while (index < n && result * 2 < n - index + 1) {
		while (index <= n && s[index] === "0") {
			index++;
			l++;
		}
		while (index <= n && s[index] === "1") {
			index++;
			r++;
		}
		result = Math.max(Math.min(l, r), result);
		l = r = 0;
	}
	return result * 2;
}
