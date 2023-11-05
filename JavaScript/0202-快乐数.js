// Map结构
function isHappy(n) {
	const map = new Map();

	function getSum(num) {
		let sum = 0;
		while (num !== 0) {
			sum += (num % 10) ** 2;
			num = (num / 10) >> 0;
		}
		return sum;
	}

	while (n !== 1 && !map.has(n)) {
		map.set(n, true);
		n = getSum(n);
	}
	return n === 1;
}

// Set结构
function isHappy(n) {
	const set = new Set();
	while (n !== 1 && !set.has(n)) {
		set.add(n);
		n = String(n)
			.split("")
			.reduce((pre, cur) => pre + Number(cur) ** 2, 0);
	}
	return n === 1;
}
