// Map结构
function isAnagram(s, t) {
	if (s.length !== t.length) return false;
	const char_count = new Map();

	for (const item of s)
		char_count.set(item, (char_count.get(item) ?? 0) + 1);

	for (const item of t) {
		const value = char_count.get(item);
		if (value === undefined || value === 0) return false;
		char_count.set(item, value - 1);
	}
	return true;
}

// 数组结构
function isAnagram(s, t) {
	if (s.length !== t.length) return false;
	const helperArr = new Array(26).fill(0);
	const base = "a".charCodeAt();
	for (const item of s) helperArr[item.charCodeAt() - base]++;
	for (const item of t)
		if (helperArr[item.charCodeAt() - base]-- === 0) return false;

	return true;
}

console.log(isAnagram("sdd", "dsd"));
