/**
 * @description 深度搜索优先
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
	// 四个方向
	const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
	const [m, n] = [grid.length, grid[0].length];

	function dfs(grid, visited, x, y) {
		for (let i = 0; i < 4; i++) {
			let nextX = x + dir[i][0];
			let nextY = y + dir[i][1];
			// 越界了，直接跳过
			if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) {
				continue;
			}
			// 没有访问过同时是陆地
			if (!visited[nextX][nextY] && grid[nextX][nextY] === '1') {
				visited[nextX][nextY] = true;
				dfs(grid, visited, nextX, nextY);
			}
		}
	}

	const visited = Array.from({ length: m }, _ => new Array(n).fill(false));

	let result = 0;
	for (let i = 0; i < m; i++) {
		for (let k = 0; k < n; k++) {
			if (!visited[i][k] && grid[i][k] === '1') {
				++result; // 遇到没访问过的陆地，+1
				visited[i][k] = true;
				dfs(grid, visited, i, k); // 将与其链接的陆地都标记上 true
			}
		}
	}
	return result;
}

/**
 * @description 广度搜索优先
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
	// 四个方向
	const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
	const [m, n] = [grid.length, grid[0].length];

	function dfs(grid, visited, x, y) {
		const queue = [[x, y]];
		while (queue.length !== 0) {
			//取出队列头部元素
			const top = queue.shift();
			for (let i = 0; i < 4; i++) {
				const nextX = top[0] + dir[i][0];
				const nextY = top[1] + dir[i][1];
				// 越界了，直接跳过
				if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) {
					continue;
				}
				if (!visited[nextX][nextY] && grid[nextX][nextY] === '1') {
					queue.push([nextX, nextY]);
					// 只要加入队列立刻标记
					visited[nextX][nextY] = true;
				}
			}
		}
	}

	const visited = Array.from({ length: m }, _ => new Array(n).fill(false));

	let result = 0;
	for (let i = 0; i < m; i++) {
		for (let k = 0; k < n; k++) {
			if (!visited[i][k] && grid[i][k] === '1') {
				++result; // 遇到没访问过的陆地，+1
				visited[i][k] = true;
				dfs(grid, visited, i, k); // 将与其链接的陆地都标记上 true
			}
		}
	}
	return result;
}
