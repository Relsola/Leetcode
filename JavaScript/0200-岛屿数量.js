/**
 * @description 深度搜索优先
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
	// 四个方向
	const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
	const n = grid.length;

	function dfs(grid, visited, x, y) {
		for (let i = 0; i < 4; i++) {
			let nextX = x + dir[i][0];
			let nextY = y + dir[i][1];
            // 越界了，直接跳过
			if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= grid[0].length) {
				continue;
			}
            // 没有访问过同时是陆地
			if (!visited[nextX][nextY] && grid[nextX][nextY] === '1') {
				visited[nextX][nextY] = true;
				dfs(grid, visited, nextX, nextY);
			}
		}
	}

    const visited = Array.from({ length: n }, _ => new Array(grid[0].length).fill(false));

	let result = 0;
	for (let i = 0; i < n; i++) {
		for (let k = 0; k < grid[i].length; k++) {
			if (!visited[i][k] && grid[i][k] === '1') {
				++result; // 遇到没访问过的陆地，+1
				visited[i][k] = true;
				dfs(grid, visited, i, k); // 将与其链接的陆地都标记上 true
			}
		}
	}
	return result;
}