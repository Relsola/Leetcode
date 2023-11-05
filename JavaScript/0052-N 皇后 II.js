/**
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
	let count = 0;
	dfs(0, 0, 0, 0);
	return count;

	//row：当前行
	//cols：放置皇后的位置
	//diag1：可以攻击的左倾斜对角线
	//diag2：可以攻击的右倾斜对角线
	function dfs(row, cols, diag1, diag2) {
		if (row >= n) {
			// 递归终止 统计解法
			count += 1;
			return;
		}
		//~(cols | diag1 | diag2)：攻击的位置合起来 取反之后，1的位置就是可以放置皇后的位置
		//(1 << n) - 1：从右向左，大于n的位置都变成0
		//(~(cols | diag1 | diag2)) & ((1 << n) - 1)：从右向左，可以放置皇后的位置，大于n的位置都变成0
		let bits = ~(cols | diag1 | diag2) & ((1 << n) - 1); // 1111
		while (bits !== 0) {
			let p = bits & -bits; // 取到从右向左第一个1 0001
			bits &= bits - 1; // 去掉从右向左第一个1 1110
			// 列和两个对角线合上不可以放置的二进制位
			// dfs(2,0001,0010,0000)
			dfs(row + 1, cols | p, (diag1 | p) << 1, (diag2 | p) >> 1);
		}
	}
}

/* 
  (1 << 4) - 1   ... 0 0 1 0 0 0 0

               cols   ... 0 0 0 0 0 1 0
              diag1   ... 0 0 0 0 1 0 0  (diag1 | p) << 1
              diag2   ... 0 0 0 0 0 0 1  (diag1 | p) >>> 1
   cols|diag1|diag2   ... 0 0 0 0 1 1 1
 ~(cols|diag1|diag2)  ... 1 1 1 1 0 0 0
        (1 << 4) - 1  ... 0 0 0 1 1 1 1
~(cols | diag1 | diag2) & ((1 << n) - 1) 
                       ... 0 0 0 1 0 0 0 

        bits 1 0 1 0 0               bits  1 0 1 0 0
       -bits 0 1 1 0 0           bits - 1  1 0 0 1 1
-bits & bits 0 0 1 0 0     bits & (bits-1) 1 0 0 0 0
*/
