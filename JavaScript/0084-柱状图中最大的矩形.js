/**
 * @description 双指针法
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
	const n = heights.length;
	const minLeftIndex = new Array(n);
	const maxRightIndex = new Array(n);
	// 记录每个柱子 左边第一个小于该柱子的下标
	minLeftIndex[0] = -1;
	for (let i = 1; i < n; i++) {
		let t = i - 1;
		while (t >= 0 && heights[t] >= heights[i]) {
			t = minLeftIndex[t];
		}
		minLeftIndex[i] = t;
	}
	// 记录每个柱子 右边第一个小于该柱子的下标
	maxRightIndex[n - 1] = n;
	for (let i = n - 2; i >= 0; i--) {
		let t = i + 1;
		while (t <= n && heights[t] > heights[i]) {
			t = maxRightIndex[t];
		}
		maxRightIndex[i] = t;
	}
	// 求和
	let maxArea = 0;
	for (let i = 0; i < n; i++) {
		let sum = heights[i] * (maxRightIndex[i] - minLeftIndex[i] - 1);
		maxArea = Math.max(maxArea, sum);
	}
	return maxArea;
}

/**
 * @description 单调栈
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
	let maxArea = 0;
	const stack = [0];
	heights.push(0);
	const n = heights.length;

	for (let i = 1; i < n; i++) {
		let top = stack.at(-1);
		while (stack.length > 0 && heights[top] > heights[i]) {
			const h = heights[stack.pop()];
			const left = stack.at(-1) ?? -1;
			const w = i - left - 1;
			maxArea = Math.max(maxArea, w * h);
			top = stack.at(-1);
		}
		stack.push(i);
	}
	return maxArea;
}
