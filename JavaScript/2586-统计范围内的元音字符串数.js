/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function vowelStrings(words, left, right) {
	const hash = { a: true, e: true, i: true, o: true, u: true };
	let result = 0;
	while (left <= right) {
		const str = words[left++];
		if (hash[str[0]] && hash[str[str.length - 1]]) {
			result++;
		}
	}
	return result;
}
