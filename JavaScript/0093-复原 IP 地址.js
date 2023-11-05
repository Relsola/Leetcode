/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
	const result = [],
		path = [],
		length = s.length;
	function backTracking(startIndex) {
		const len = path.length;
		if (len > 4) {
			return;
		}
		if (len === 4 && startIndex === s.length) {
			result.push(path.join("."));
			return;
		}
		for (let i = startIndex; i < length; i++) {
			const str = s.substring(startIndex, i + 1);
			if (str.length > 3 || Number(str) > 255) {
				break;
			}
			if (str.length > 1 && str[0] === "0") {
				break;
			}
			path.push(str);
			backTracking(i + 1);
			path.pop();
		}
	}
	backTracking(0);
	return result;
}
