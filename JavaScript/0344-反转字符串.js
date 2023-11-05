/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

function reverseString(s) {
	let l = -1,
		r = s.length;

	while (++l < --r) [s[l], s[r]] = [s[r], s[l]];
}
