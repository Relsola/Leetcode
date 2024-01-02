/**
 * @description 深度搜索优先
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  const [rowSize, colSize] = [board.length, board[0].length];

  function dfs(board, x, y) {
    board[x][y] = 'A';
    for (let i = 0; i < 4; i++) {
      const nextX = dir[i][0] + x;
      const nextY = dir[i][1] + y;
      if (nextX < 0 || nextX >= rowSize || nextY < 0 || nextY >= colSize) {
        continue;
      }
      if (board[nextX][nextY] === 'O') {
        dfs(board, nextX, nextY);
      }
    }
  }

  for (let i = 0; i < rowSize; i++) {
    if (board[i][0] === 'O') {
      dfs(board, i, 0);
    }
    if (board[i][colSize - 1] === 'O') {
      dfs(board, i, colSize - 1);
    }
  }

  for (let i = 1; i < colSize - 1; i++) {
    if (board[0][i] === 'O') {
      dfs(board, 0, i);
    }
    if (board[rowSize - 1][i] === 'O') {
      dfs(board, rowSize - 1, i);
    }
  }

  for (let i = 0; i < rowSize; i++) {
    for (let k = 0; k < colSize; k++) {
      if (board[i][k] === 'A') {
        board[i][k] = 'O';
      } else if (board[i][k] === 'O') {
        board[i][k] = 'X';
      }
    }
  }
}
