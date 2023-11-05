function canConstruct(ransomNote, magazine) {
	const helperArr = new Array(26).fill(0),
		base = "a".charCodeAt();
	// 记录 magazine里各个字符出现次数
	for (const char of magazine) helperArr[char.charCodeAt() - base]++;

	// 对应的字符个数做--操作
	for (const char of ransomNote)
		if (!helperArr[char.charCodeAt() - base]--) return false;

	return true;
}
