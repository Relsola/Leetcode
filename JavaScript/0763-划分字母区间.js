/**
 * @param {string} s
 * @return {number[]}
 */
function partitionLabels(s) {
	const n = s.length,
		hash = {};
	for (let i = 0; i < n; i++) {
		hash[s[i]] = i;
	}
	const result = [];
	let left = 0;
	let right = 0;
	for (let i = 0; i < n; i++) {
		right = Math.max(right, hash[s[i]]);
		if (right === i) {
			result.push(right - left + 1);
			left = i + 1;
		}
	}
	return result;
}
