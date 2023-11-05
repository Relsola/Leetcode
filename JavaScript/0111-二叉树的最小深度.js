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
function minDepth(root) {
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
			// 左右孩子都为空
			if (!node.left && !node.right) {
				return depth;
			}
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
function minDepth(root) {
	if (root === null) {
		return 0;
	}
	// 到叶子节点 返回 1
	if (!root.left && !root.right) {
		return 1;
	}
	// 只有右节点时 递归右节点
	if (!root.left) {
		return 1 + minDepth(root.right);
	}
	// 只有左节点时 递归左节点
	if (!root.right) {
		return 1 + minDepth(root.left);
	}
	return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}
