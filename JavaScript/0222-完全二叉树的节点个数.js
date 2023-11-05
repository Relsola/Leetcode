// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 递归遍历
 * @param  {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
	// 确定递归函数参数
	function getNodeSum(node) {
		// 确定终止条件
		if (node === null) {
			return 0;
		}
		// 确定单层递归逻辑
		let leftNum = getNodeSum(node.left);
		let rightNum = getNodeSum(node.right);
		return leftNum + rightNum + 1;
	}
	return getNodeSum(root);
}

/**
 * @description 层序遍历
 * @param  {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
	if (root === null) {
		return 0;
	}
	const queue = [root];
	let nodeNums = 0;
	while (queue.length !== 0) {
		const length = queue.length;
		for (let i = 0; i < length; i++) {
			const node = queue.shift();
			nodeNums++;
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
	}
	return nodeNums;
}

/**
 * @description 利用完全二叉树性质
 * @param  {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
	if (root === null) {
		return 0;
	}
	let left = root.left,
		right = root.right,
		leftDepth = 0,
		rightDepth = 0;

	while (left !== null) {
		left = left.left;
		leftDepth++;
	}
	while (right !== null) {
		right = right.right;
		rightDepth++;
	}
	if (leftDepth === rightDepth) {
		return Math.pow(2, leftDepth + 1) - 1;
	}
	return countNodes(root.left) + countNodes(root.right) + 1;
}
