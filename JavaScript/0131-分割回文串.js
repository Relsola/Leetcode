/**
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
	const result = [],
		path = [],
		length = s.length;

	function isPalindrome(s, l, r) {
		for (let i = l, j = r; i < r; i++, j--) {
			if (s.charAt(i) !== s.charAt(j)) {
				return false;
			}
		}
		return true;
	}

	function backTracking(startIndex) {
		if (startIndex >= length) {
			result.push([...path]);
			return;
		}
		for (let i = startIndex; i < length; i++) {
			if (!isPalindrome(s, startIndex, i)) {
				continue;
			}
			path.push(s.substring(startIndex, i + 1));
			backTracking(i + 1);
			path.pop();
		}
	}
	backTracking(0);
	return result;
}
