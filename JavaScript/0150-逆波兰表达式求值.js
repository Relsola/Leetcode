/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
	const stack = [],
		n = tokens.length;
	for (let i = 0; i < n; i++) {
		const token = tokens[i];
		if (isNaN(Number(token))) {
			// 非数字 出栈两个数字进行运算
			const n2 = stack.pop();
			const n1 = stack.pop();
			switch (token) {
				case "+":
					stack.push(n1 + n2);
					break;
				case "-":
					stack.push(n1 - n2);
					break;
				case "*":
					stack.push(n1 * n2);
					break;
				case "/":
					// 除法向零截断
					stack.push((n1 / n2) | 0);
					break;
			}
		} else {
			// 数字进栈
			stack.push(Number(token));
		}
	}
	return stack.pop();
}

// 优化版
/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
	const stack = [],
		n = tokens.length,
		operatorMap = new Map([
			["+", (a, b) => a + b],
			["-", (a, b) => a - b],
			["/", (a, b) => (a / b) | 0],
			["*", (a, b) => a * b]
		]);

	let n1, n2;
	for (let i = 0; i < n; i++) {
		const token = tokens[i];
		if (operatorMap.has(token)) {
			n2 = stack.pop();
			n1 = stack.pop();
			stack.push(operatorMap.get(token)(n1, n2));
		} else {
			stack.push(Number(token));
		}
	}
	return stack.pop();
}
