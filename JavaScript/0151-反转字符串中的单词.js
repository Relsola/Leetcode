/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
	// 字符串转数组
	const charArr = Array.from(s),
		n = charArr.length;
	// 移除多余空格
	removeExtraSpace(charArr);
	// 翻转
	reverse(charArr, 0, n - 1);

	let start = 0;
	for (let i = 0; i <= n; i++) {
		if (charArr[i] === " " || i === n) {
			// 翻转单词
			reverse(charArr, start, i - 1);
			start = i + 1;
		}
	}

	return charArr.join("");
}

/**
 * @description     删除多余空格
 * @param           {string[]} charArr
 * @return          {void}
 */
function removeExtraSpace(charArr) {
	let slowIndex = 0,
		fastIndex = 0,
		n = charArr.length;

	// 移除开始位置的空格
	while (fastIndex < n && charArr[fastIndex] === " ") fastIndex++;

	// 移除重复的空格
	while (fastIndex < n) {
		if (charArr[fastIndex] === " " && charArr[fastIndex - 1] === " ") {
			fastIndex++;
		} else {
			charArr[slowIndex++] = charArr[fastIndex++];
		}
	}

	// 移除末尾空格
	charArr.length = charArr[slowIndex - 1] === " " ? slowIndex - 1 : slowIndex;
}

/**
 * @description     翻转从 start 到 end 的字符
 * @param           {string[]} charArr
 * @param           {number} start
 * @param           {number} end
 * @return          {void}
 */
function reverse(charArr, start, end) {
	let temp;

	while (start < end) {
		// 交换
		temp = charArr[start];
		charArr[start] = charArr[end];
		charArr[end] = temp;
		start++;
		end--;
	}
}
