// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 层序遍历
 * @param  {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
	let depth = 0;
	if (root === null) {
		return depth;
	}
	const queue = [root];
	while (queue.length !== 0) {
		const length = queue.length;
		depth++;
		for (let i = 0; i < length; i++) {
			const node = queue.shift();
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
	}
	return depth;
}

/**
 * @description 递归遍历
 * @param  {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
	// 确定递归函数的参数和返回值
	function getDepth(node) {
		// 确定终止条件
		if (node === null) {
			return 0;
		}
		// 确定单层逻辑
		let leftDepth = getDepth(node.left);
		let rightDepth = getDepth(node.right);
		const depth = 1 + Math.max(leftDepth, rightDepth);
		return depth;
	}
	return getDepth(root);
}

/* 
function maxDepth(root) {
	if (root === null) return 0;
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
 */
