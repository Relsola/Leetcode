/**
 * @param {number} n
 * @return {number}
 */
function monotoneIncreasingDigits(n) {
	n = n
		.toString()
		.split("")
		.map(item => Number(item));
	const length = n.length;
	let flag = Infinity;
	for (let i = length - 1; i > 0; i--) {
		if (n[i - 1] > n[i]) {
			flag = i;
			n[i - 1] = n[i - 1] - 1;
			n[i] = 9;
		}
	}
	for (let i = flag; i < length; i++) {
		n[i] = 9;
	}
	n = n.join("");
	return Number(n);
}
