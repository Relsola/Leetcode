// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function minCameraCover(root) {
	/* 0-无覆盖， 1-有摄像头， 2-有覆盖 */
	let result = 0;
	function traversal(cur) {
		// 空节点，该节点有覆盖
		if (cur === null) {
			return 2;
		}
		const left = traversal(cur.left);
		const right = traversal(cur.right);
		// 左右节点都有覆盖
		if (left === 2 && right === 2) {
			return 0;
		}
		// 情况2
		// left == 0 && right == 0 左右节点无覆盖
		// left == 1 && right == 0 左节点有摄像头，右节点无覆盖
		// left == 0 && right == 1 左节点有无覆盖，右节点摄像头
		// left == 0 && right == 2 左节点无覆盖，右节点覆盖
		// left == 2 && right == 0 左节点覆盖，右节点无覆盖
		if (left === 0 || right === 0) {
			result++;
			return 1;
		}
		// 情况3
		// left == 1 && right == 2 左节点有摄像头，右节点有覆盖
		// left == 2 && right == 1 左节点有覆盖，右节点有摄像头
		// left == 1 && right == 1 左右节点都有摄像头
		if (left === 1 || right === 1) {
			return 2;
		}
	}
	if (traversal(root) === 0) {
		result++;
	}
	return result;
}
