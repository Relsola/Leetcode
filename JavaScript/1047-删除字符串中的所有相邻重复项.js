// 模拟栈
/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicates(s) {
	const n = s.length;
	if (n === 1) return s;

	const result = [];
	let length = -1;

	for (let i = 0; i < n; i++) {
		const char = s.charAt(i);
		if (result[length] !== char) {
			result.push(char);
			length++;
		} else {
			result.pop();
			length--;
		}
	}

	return result.join("");
}

// 双指针
/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicates(s) {
	const n = s.length;
	if (n === 1) return s;

	s = [...s];
	// 指向栈顶元素的下标
	let top = -1;

	for (let i = 0; i < n; i++) {
		if (top === -1 || s[top] !== s[i]) {
			// 入栈
			s[++top] = s[i];
		} else {
			// 出栈
			top--;
		}
	}
	// 栈顶元素下标 + 1 为栈的长度
	s.length = top + 1;
	return s.join("");
}
