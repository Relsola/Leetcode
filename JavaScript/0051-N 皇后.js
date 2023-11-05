/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
	const result = [],
		chessBoard = new Array(n).fill(0).map(() => new Array(n).fill("."));

	function isValid(row, col) {
		// 列
		for (let i = 0; i < row; i++) {
			if (chessBoard[i][col] === "Q") {
				return false;
			}
		}
		// 左上斜线 不需要判断下部分斜线
		for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
			if (chessBoard[i][j] === "Q") {
				return false;
			}
		}
		// 右上斜线
		for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
			if (chessBoard[i][j] === "Q") {
				return false;
			}
		}
		return true;
	}
	function transformChessBoard() {
		const chessBoardBack = [];
		chessBoard.forEach(row => {
			chessBoardBack.push(row.reduce((pre, cur) => pre + cur, ""));
		});
		return chessBoardBack;
	}

	function backTracking(row) {
		if (row === n) {
			result.push(transformChessBoard());
			return;
		}
		for (let col = 0; col < n; col++) {
			if (isValid(row, col)) {
				chessBoard[row][col] = "Q";
				backTracking(row + 1);
				chessBoard[row][col] = ".";
			}
		}
	}
	backTracking(0);
	return result;
}
