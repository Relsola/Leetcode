// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 递归法
 * @param  {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
	// 终止条件
	if (root === null) {
		return root;
	}
	// 交换左右节点
	const rightNode = root.right;
	root.right = invertTree(root.left);
	root.left = invertTree(rightNode);
	return root;
}

// 定义节点交换函数
function invertNode(root) {
	const temp = root.left;
	root.left = root.right;
	root.right = temp;
}

/**
 * @description 迭代法
 * @param  {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
	if (root === null) {
		return root;
	}
	const stack = [root];

	while (stack.length !== 0) {
		let node = stack.pop();
		if (node !== null) {
			// 前序遍历顺序中左右  入栈顺序是前序遍历的倒序右左中
			node.right && stack.push(node.right);
			node.left && stack.push(node.left);
			stack.push(node);
			stack.push(null);
		} else {
			node = stack.pop();
			//节点处理逻辑
			invertNode(node);
		}
	}
	return root;
}

/**
 * @description 层序遍历
 * @param  {TreeNode} root
 * @return {number[][]}
 */
function invertTree(root) {
	if (root === null) {
		return root;
	}
	const queue = [root];

	while (queue.length !== 0) {
		// 记录当前层级节点数
		let length = queue.length;
		for (let i = 0; i < length; i++) {
			const node = queue.shift();
			// 交换节点
			invertNode(node);
			// 存放当前层下一层的节点
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
	}

	return root;
}
