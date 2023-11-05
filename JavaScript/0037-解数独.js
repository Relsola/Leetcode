/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
	function isValid(row, col, val, board) {
		// 行不能重复
		for (let i = 0; i < 9; i++) {
			if (board[row][i] === val) {
				return false;
			}
		}
		// 列不能重复
		for (let i = 0; i < 9; i++) {
			if (board[i][col] === val) {
				return false;
			}
		}
		// 九宫格不能重复
		const startRow = Math.floor(row / 3) * 3;
		const startCol = Math.floor(col / 3) * 3;
		for (let i = startRow; i < startRow + 3; i++) {
			for (let k = startCol; k < startCol + 3; k++) {
				if (board[i][k] === val) {
					return false;
				}
			}
		}
		return true;
	}
	function backTracking(board) {
		for (let i = 0; i < 9; i++) {
			for (let k = 0; k < 9; k++) {
				if (board[i][k] !== ".") {
					continue;
				}
				for (let val = 1; val <= 9; val++) {
					if (isValid(i, k, `${val}`, board)) {
						board[i][k] = `${val}`;
						if (backTracking(board)) {
							return true;
						}
						board[i][k] = ".";
					}
				}
				return false;
			}
		}
		return true;
	}
	backTracking(board);
}
