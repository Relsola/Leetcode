/**
 * @description 深度搜索优先
 * @param {number[][]} heights
 * @return {number[][]}
 */
function pacificAtlantic(heights) {
  const dir = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1]
  ];
  const [rowSize, colSize] = [heights.length, heights[0].length];
  const visited = Array.from({ length: rowSize }, _ =>
    Array.from({ length: colSize }, _ => new Array(2).fill(false))
  );
  const result = [];

  function dfs(heights, visited, x, y, sign) {
    if (visited[x][y][sign]) {
      return;
    }
    visited[x][y][sign] = true;
    for (let i = 0; i < 4; i++) {
      const nextX = x + dir[i][0];
      const nextY = y + dir[i][1];
      if (nextX < 0 || nextX >= rowSize || nextY < 0 || nextY >= colSize) {
        continue;
      }
      if (heights[x][y] > heights[nextX][nextY]) {
        continue;
      }
      dfs(heights, visited, nextX, nextY, sign);
    }
  }

  for (let i = 0; i < rowSize; i++) {
    dfs(heights, visited, i, 0, 0);
    dfs(heights, visited, i, colSize - 1, 1);
  }

  for (let i = 0; i < colSize; i++) {
    dfs(heights, visited, 0, i, 0);
    dfs(heights, visited, rowSize - 1, i, 1);
  }

  for (let i = 0; i < rowSize; i++) {
    for (let k = 0; k < colSize; k++) {
      if (visited[i][k][0] && visited[i][k][1]) {
        result.push([i, k]);
      }
    }
  }

  return result;
}

/**
 * @description 广度搜索优先
 * @param {number[][]} heights
 * @return {number[][]}
 */
function pacificAtlantic(heights) {
  const dir = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1]
  ];
  const [rowSize, colSize] = [heights.length, heights[0].length];
  const visited = Array.from({ length: rowSize }, _ =>
    Array.from({ length: colSize }, _ => new Array(2).fill(false))
  );
  const result = [];

  function bfs(heights, visited, x, y, sign) {
    if (visited[x][y][sign]) {
      return;
    }
    visited[x][y][sign] = true;
    const stack = [y, x];
    while (stack.length !== 0) {
      [x, y] = [stack.pop(), stack.pop()];
      for (let i = 0; i < 4; i++) {
        const nextX = x + dir[i][0];
        const nextY = y + dir[i][1];
        if (nextX < 0 || nextX >= rowSize || nextY < 0 || nextY >= colSize) {
          continue;
        }
        if (heights[x][y] > heights[nextX][nextY] || visited[nextX][nextY][sign]) {
          continue;
        }
        visited[nextX][nextY][sign] = true;
        stack.push(nextY, nextX);
      }
    }
  }

  for (let i = 0; i < rowSize; i++) {
    bfs(heights, visited, i, 0, 0);
    bfs(heights, visited, i, colSize - 1, 1);
  }

  for (let i = 0; i < colSize; i++) {
    bfs(heights, visited, 0, i, 0);
    bfs(heights, visited, rowSize - 1, i, 1);
  }

  for (let i = 0; i < rowSize; i++) {
    for (let k = 0; k < colSize; k++) {
      if (visited[i][k][0] && visited[i][k][1]) {
        result.push([i, k]);
      }
    }
  }

  return result;
}
