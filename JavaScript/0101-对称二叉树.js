// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 递归法
 * @param  {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
	// 确定递归的参数 root.left root.right和返回值true false
	function compareNode(left, right) {
		// 确定终止条件 空的情况
		if ((!left && right) || (left && !right)) {
			return false;
		} else if (!left && !right) {
			return true;
		} else if (left.val !== right.val) {
			return false;
		}
		// 确定单层递归逻辑
		const outSide = compareNode(left.left, right.right);
		const inSide = compareNode(left.right, right.left);
		return outSide && inSide;
	}
	if (root === null) {
		return true;
	}
	return compareNode(root.left, root.right);
}

/**
 * @description 迭代法（队列实现）
 * @param  {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
	// 首先判断root是否为空
	if (root === null) {
		return true;
	}
	const queue = [];
	queue.push(root.left);
	queue.push(root.right);
	while (queue.length !== 0) {
		const leftNode = queue.shift(); // 左节点
		const rightNode = queue.shift(); // 右节点
		if (!leftNode && !rightNode) {
			continue;
		}
		if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
			return false;
		}
		queue.push(leftNode.left); // 左节点左孩子入队
		queue.push(rightNode.right); // 右节点右孩子入队
		queue.push(leftNode.right); // 左节点右孩子入队
		queue.push(rightNode.left); // 右节点左孩子入队
	}

	return true;
}

/**
 * @description 迭代法（栈实现）
 * @param  {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
	// 首先判断root是否为空
	if (root === null) {
		return true;
	}
	const stack = [];
	stack.push(root.left);
	stack.push(root.right);
	while (stack.length !== 0) {
		const leftNode = stack.pop(); // 左节点
		const rightNode = stack.pop(); // 右节点
		if (!leftNode && !rightNode) {
			continue;
		}
		if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
			return false;
		}
		stack.push(leftNode.left); // 左节点左孩子入队
		stack.push(rightNode.right); // 右节点右孩子入队
		stack.push(leftNode.right); // 左节点右孩子入队
		stack.push(rightNode.left); // 右节点左孩子入队
	}

	return true;
}
