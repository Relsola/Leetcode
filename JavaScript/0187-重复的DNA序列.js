/**
 * @param {string} s
 * @return {string[]}
 */
function findRepeatedDnaSequences(s) {
	const map = new Set(),
		result = new Set(),
		n = s.length - 9;
	for (let i = 0; i < n; i++) {
		const str = s.substring(i, i + 10);
		if (map.has(str)) {
			result.add(str);
		} else {
			map.add(str);
		}
	}
	return [...result];
}

/**
 * @description
 * @param {string} s
 * @return {string[]}
 */
function findRepeatedDnaSequences(s) {
	const L = 10;
	const bin = new Map();
	bin.set("A", 0);
	bin.set("C", 1);
	bin.set("G", 2);
	bin.set("T", 3);

	const result = [];
	const n = s.length;
	if (n <= L) {
		return result;
	}
	let x = 0;
	// 获取十个字符串的整数表示
	for (let i = 0; i < L - 1; ++i) {
		// x << 2 滑动窗口向右移动一位
		// x |= bin.get(s[i]) 一个新的字符进入窗口
		// x &= ((1 << 20) - 1) 最左边的字符离开窗口
		x = (x << 2) | bin.get(s[i]);
	}
	const map = new Map();
	for (let i = 0; i <= n - L; ++i) {
		x = ((x << 2) | bin.get(s[i + L - 1])) & ((1 << (L * 2)) - 1);
		map.set(x, (map.get(x) || 0) + 1);
		if (map.get(x) === 2) {
			result.push(s.slice(i, i + L));
		}
	}
	return result;
}
