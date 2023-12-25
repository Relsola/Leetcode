/**
 * @description 双指针解法
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
	const n = height.length;
	if (n <= 2) {
		return 0;
	}
	const maxLeft = new Array(n).fill(0);
	const maxRight = new Array(n).fill(0);
	// 记录每个柱子左边柱子最大高度
	maxLeft[0] = height[0];
	for (let i = 1; i < n; i++) {
		maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
	}
	// 记录每个柱子右边柱子最大高度
	maxRight[n - 1] = height[n - 1];
	for (let i = n - 2; i >= 0; i--) {
		maxRight[i] = Math.max(height[i], maxRight[i + 1]);
	}
	// 求和
	let sum = 0;
	for (let i = 1; i < n; i++) {
		let count = Math.min(maxLeft[i], maxRight[i]) - height[i];
		if (count > 0) {
			sum += count;
		}
	}
	return sum;
}

/**
 * @description 单调栈
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
	const n = height.length;
	if (n <= 2) {
		return 0;
	}
	// 存着下标，计算的时候用下标对应的柱子高度
	const stack = [0];
	let sum = 0;
	for (let i = 1; i < n; i++) {
		while (stack.length !== 0 && height[i] > height[stack.at(-1)]) {
			let mid = stack.at(-1);
			stack.pop();
			if (stack.length !== 0) {
				let h = Math.min(height[stack.at(-1)], height[i]) - height[mid];
				let w = i - stack.at(-1) - 1;
				sum += h * w;
			}
		}
		stack.push(i);
	}
	return sum;
}
