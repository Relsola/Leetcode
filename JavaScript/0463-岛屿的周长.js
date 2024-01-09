/**
 * @description 遍历每一个空格，遇到岛屿，计算其上下左右的情况，遇到水域或者出界的情况计算边
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
  const row = grid.length,
    col = grid[0].length,
    dir = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ];
  let result = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        for (let k = 0; k < 4; k++) {
          let x = i + dir[k][0],
            y = j + dir[k][1];
          if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) {
            result++;
          }
        }
      }
    }
  }
  return result;
}
