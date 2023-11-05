// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 递归遍历
 * @param       {TreeNode} root
 * @return      {boolean}
 */
function isBalanced(root) {
	// 确定递归函数参数以及返回值
	function getDepth(node) {
		// 确定递归函数终止条件
		if (node === null) {
			return 0;
		}
		// 确定单层递归逻辑
		const leftDepth = getDepth(node.left); // 左子树高度
		// 当判定左子树不为平衡二叉树时,即可直接返回-1
		if (leftDepth === -1) {
			return -1;
		}
		const rightDepth = getDepth(node.right); // 右子树高度
		// 当判定右子树不为平衡二叉树时,即可直接返回-1
		if (rightDepth === -1) {
			return -1;
		}
		if (Math.abs(leftDepth - rightDepth) > 1) {
			return -1;
		} else {
			return 1 + Math.max(leftDepth, rightDepth);
		}
	}
	return getDepth(root) !== -1;
}

/**
 * @description 迭代遍历
 * @param       {TreeNode} root
 * @return      {boolean}
 */
function isBalanced(root) {
	if (root === null) {
		return true;
	}
	const queue = [root];
	while (queue.length !== 0) {
		const node = queue.pop();
		if (Math.abs(getDepth(node.left) - getDepth(node.right)) > 1) {
			return false;
		}
		node.right && queue.push(node.right);
		node.left && queue.push(node.left);
	}
	return true;
}

function getDepth(curNode) {
	if (curNode === null) {
		return 0;
	}
	const queue = [curNode];
	let depth = 0,
		result = 0;
	while (queue.length !== 0) {
		const node = queue.pop();
		if (node !== null) {
			queue.push(node); // 中
			queue.push(null);
			depth++;
			node.right && queue.push(node.right); // 右
			node.left && queue.push(node.left); // 左
		} else {
			queue.pop();
			depth--;
		}
		result = result > depth ? result : depth;
	}
	return result;
}
