function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param  {TreeNode} root
 * @return {number[][]}
 */
function rightSideView(root) {
	// 二叉树的层序遍历
	const result = [],
		queue = [root];

	if (root === null) {
		return result;
	}

	while (queue.length !== 0) {
		// 记录当前层级节点数
		let length = queue.length;
		for (let i = 0; i < length; i++) {
			const node = queue.shift();
			// 二叉树右视图 只需要把每一层最后一个节点存储到result数组
			if (i === length - 1) {
				result.push(node.val);
			}
			// 存放当前层下一层的节点
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
	}

	return result;
}
