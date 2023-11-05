/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
	const stack = [],
		n = s.length;
	for (let i = 0; i < n; i++) {
		const c = s[i];
		switch (c) {
			case "(":
				stack.push(")");
				break;
			case "[":
				stack.push("]");
				break;
			case "{":
				stack.push("}");
				break;
			default:
				if (c !== stack.pop()) {
					return false;
				}
				break;
		}
	}
	return stack.length === 0;
}

// 优化版 -----------------------------------------
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
	const stack = [],
		map = {
			"(": ")",
			"[": "]",
			"{": "}"
		};

	for (const x of s) {
		if (x in map) {
			stack.push(x);
		} else if (map[stack.pop()] !== x) {
			return false;
		}
	}
	return stack.length === 0;
}
