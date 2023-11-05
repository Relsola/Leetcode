function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param  {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom(root) {
	// 二叉树的层序遍历
	const result = [],
		queue = [root];

	if (root === null) {
		return result;
	}

	while (queue.length !== 0) {
		// 记录当前层级节点数
		let length = queue.length;
		// 存放每一层的节点
		const curLevel = [];
		for (let i = 0; i < length; i++) {
			const node = queue.shift();
			curLevel.push(node.val);
			// 存放当前层下一层的节点
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		// 从数组前头插入值，避免最后反转数组，减少运算时间
		result.unshift(curLevel);
	}

	return result;
}
