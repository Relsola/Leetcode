/**
 * @description 深度搜索优先
 * @param {number[][]} grid
 * @return {number}
 */
function largestIsland(grid) {
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  const [rowSize, colSize] = [grid.length, grid[0].length];
  const getSize = [],
    set = new Set();
  let mark = 2,
    result = 0;

  function dfs(grid, row, col, mark) {
    if (grid[row][col] !== 1) {
      return 0;
    }
    grid[row][col] = mark;
    let count = 1;
    for (let i = 0; i < 4; i++) {
      const nextX = dir[i][0] + row;
      const nextY = dir[i][1] + col;
      if (nextX < 0 || nextX >= rowSize || nextY < 0 || nextY >= colSize) {
        continue;
      }
      if (grid[nextX][nextY] === 1) {
        count += dfs(grid, nextX, nextY, mark);
      }
    }
    return count;
  }

  for (let row = 0; row < rowSize; row++) {
    for (let col = 0; col < colSize; col++) {
      if (grid[row][col] === 1) {
        const areaSize = dfs(grid, row, col, mark);
        getSize[mark++] = areaSize;
      }
    }
  }

  for (let row = 0; row < rowSize; row++) {
    for (let col = 0; col < colSize; col++) {
      if (grid[row][col] === 0) {
        let count = 1;
        set.clear();
        for (let i = 0; i < 4; i++) {
          const nextX = dir[i][0] + row;
          const nextY = dir[i][1] + col;
          if (nextX < 0 || nextX >= rowSize || nextY < 0 || nextY >= colSize) {
            continue;
          }
          const num = grid[nextX][nextY];
          if (num === 0 || set.has(num)) {
            continue;
          }
          set.add(num);
          count += getSize[num];
        }
        result = Math.max(result, count);
      }
    }
  }

  return result || rowSize * colSize;
}

/**
 * @description 广度搜索优先
 * @param {number[][]} grid
 * @return {number}
 */
function largestIsland(grid) {
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  const [rowSize, colSize] = [grid.length, grid[0].length];
  const getSize = [],
    set = new Set();
  let mark = 2,
    result = 0;

  function bfs(grid, row, col, mark) {
    if (grid[row][col] !== 1) {
      return 0;
    }
    grid[row][col] = mark;
    let count = 1;
    const stack = [col, row];
    while (stack.length !== 0) {
      [row, col] = [stack.pop(), stack.pop()];
      for (let i = 0; i < 4; i++) {
        const nextX = dir[i][0] + row;
        const nextY = dir[i][1] + col;
        if (nextX < 0 || nextX >= rowSize || nextY < 0 || nextY >= colSize) {
          continue;
        }
        if (grid[nextX][nextY] === 1) {
          grid[nextX][nextY] = mark;
          count++;
          stack.push(nextY, nextX);
        }
      }
    }
    return count;
  }

  for (let row = 0; row < rowSize; row++) {
    for (let col = 0; col < colSize; col++) {
      if (grid[row][col] === 1) {
        const areaSize = bfs(grid, row, col, mark);
        getSize[mark++] = areaSize;
      }
    }
  }

  for (let row = 0; row < rowSize; row++) {
    for (let col = 0; col < colSize; col++) {
      if (grid[row][col] === 0) {
        let count = 1;
        set.clear();
        for (let i = 0; i < 4; i++) {
          const nextX = dir[i][0] + row;
          const nextY = dir[i][1] + col;
          if (nextX < 0 || nextX >= rowSize || nextY < 0 || nextY >= colSize) {
            continue;
          }
          const num = grid[nextX][nextY];
          if (num === 0 || set.has(num)) {
            continue;
          }
          set.add(num);
          count += getSize[num];
        }
        result = Math.max(result, count);
      }
    }
  }

  return result || rowSize * colSize;
}
