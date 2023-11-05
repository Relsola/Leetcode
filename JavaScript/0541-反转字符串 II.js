/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

function reverseStr(s, k) {
	const n = s.length,
		arr = s.split("");

	for (let i = 0; i < n; i += 2 * k) {
		let l = i - 1,
			r = i + k > n ? n : i + k;
		while (++l < --r) [arr[l], arr[r]] = [arr[r], arr[l]];
	}

	return arr.join("");
}
