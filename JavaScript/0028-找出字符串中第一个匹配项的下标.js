/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

function strStr(haystack, needle) {
	/**
	 * @description     获取前缀表
	 * @param           {string} str
	 * @return          {number[]}
	 */
	function getNext(str) {
		const next = [];
		let k = -1;
		next[0] = k;
		for (let i = 1, length = str.length; i < length; i++) {
			while (k >= 0 && str[i] !== str[k + 1]) {
				k = next[k];
			}
			if (str[i] === str[k + 1]) {
				k++;
			}
			next[i] = k;
		}
		return next;
	}

	const next = getNext(needle);
	let k = -1;
	for (let i = 0, length = haystack.length; i < length; i++) {
		while (k >= 0 && haystack[i] !== needle[k + 1]) {
			k = next[k];
		}
		if (haystack[i] === needle[k + 1]) {
			if (k === needle.length - 2) {
				return i - k - 1;
			}
			k++;
		}
	}
	return -1;
}
