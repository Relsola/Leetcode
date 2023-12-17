/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

function dailyTemperatures(temperatures) {
	const n = temperatures.length;
	const result = new Array(n).fill(0);
	// 递增栈：用于存储元素右面第一个比他大的元素下标
	const stack = [];
	stack.push(0);
	for (let i = 1; i < n; i++) {
		while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
			const top = stack.pop();
			result[top] = i - top;
		}
		stack.push(i);
	}
	return result;
}
