function generateMatrix(n) {
	const result = new Array(n)
		.fill(null)
		.map(() => new Array(n).fill(null));

	let start = 0; // 起始位置
	let loop = n >> 1; // 旋转圈数
	let mid = n >> 1; // 中间位置
	let offset = 1; // 控制每一层填充元素个数
	let count = 1; // 更新填充数字

	while (loop--) {
		let row = start,
			col = start;
		// 上行从左到右（左闭右开）
		while (col < n - offset) result[row][col++] = count++;
		// 右列从上到下（左闭右开）
		while (row < n - offset) result[row++][col] = count++;
		// 下行从右到左（左闭右开）
		while (col > start) result[row][col--] = count++;
		// 左列做下到上（左闭右开）
		while (row > start) result[row--][col] = count++;

		// 更新起始位置
		start++;

		// 更新offset
		offset++;
	}

	// 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
	if ((n & 1) === 1) result[mid][mid] = count;

	return result;
}
