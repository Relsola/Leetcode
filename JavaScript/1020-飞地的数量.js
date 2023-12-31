/**
 * @description 深度搜索优先
 * @param {number[][]} grid
 * @return {number}
 */
function numEnclaves(grid) {
	const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];
	const [m, n] = [grid.length, grid[0].length];
	function dfs(grid, x, y) {
		grid[x][y] = 0;
		for (let i = 0; i < 4; i++) {
			const nextX = x + dir[i][0];
			const nextY = y + dir[i][1];
			if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) {
				continue;
			}
			if (grid[nextX][nextY] === 0) {
				continue;
			}
			dfs(grid, nextX, nextY);
		}
	}

	// 遍历左右侧
	for (let i = 0; i < m; i++) {
		if (grid[i][0] === 1) {
			dfs(grid, i, 0);
		}
		if (grid[i][n - 1] === 1) {
			dfs(grid, i, n - 1);
		}
	}

	// 遍历上下侧
	for (let k = 1; k < n - 1; k++) {
		if (grid[0][k] === 1) {
			dfs(grid, 0, k);
		}
		if (grid[m - 1][k] === 1) {
			dfs(grid, m - 1, k);
		}
	}

	let count = 0;
	for (let i = 0; i < m; i++) {
		for (let k = 0; k < n; k++) {
			if (grid[i][k] === 1) {
				count++;
			}
		}
	}
	return count;
}

/**
 * @description 广度搜索优先
 * @param {number[][]} grid
 * @return {number}
 */
function numEnclaves(grid) {
	const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];
	const [m, n] = [grid.length, grid[0].length];
	function bfs(grid, x, y) {
		const stack = [y, x]; // 栈先进后出
		grid[x][y] = 0;
		while (stack.length !== 0) {
			const top = [stack.pop(), stack.pop()];
			for (let i = 0; i < 4; i++) {
				const nextX = top[0] + dir[i][0];
				const nextY = top[1] + dir[i][1];
				if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) {
					continue;
				}
				if (grid[nextX][nextY] === 1) {
					stack.push(nextY, nextX);
					grid[nextX][nextY] = 0;
				}
			}
		}
	}

	// 遍历左右侧
	for (let i = 0; i < m; i++) {
		if (grid[i][0] === 1) {
			bfs(grid, i, 0);
		}
		if (grid[i][n - 1] === 1) {
			bfs(grid, i, n - 1);
		}
	}

	// 遍历上下侧
	for (let k = 1; k < n - 1; k++) {
		if (grid[0][k] === 1) {
			bfs(grid, 0, k);
		}
		if (grid[m - 1][k] === 1) {
			bfs(grid, m - 1, k);
		}
	}

	let count = 0;
	for (let i = 0; i < m; i++) {
		for (let k = 0; k < n; k++) {
			if (grid[i][k] === 1) {
				count++;
			}
		}
	}
	return count;
}
