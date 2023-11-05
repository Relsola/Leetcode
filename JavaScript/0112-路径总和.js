// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 递归遍历
 * @param  {TreeNode} root
 * @param  {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
	if (root === null) {
		return false;
	}

	// 确定递归函数参数以及返回值
	function recur(node, cnt) {
		// 遇到叶子节点，并且计数为0
		if (cnt === 0 && !node.left && !node.right) {
			return true;
		}
		// 遇到叶子节点而计数不为0，直接返回
		if (!node.left && !node.right) {
			return false;
		}
		// 左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
		if (node.left && recur(node.left, cnt - node.left.val)) {
			return true;
		}
		// 右（空节点不遍历）
		if (node.right && recur(node.right, cnt - node.right.val)) {
			return true;
		}
		return false;
	}

	return recur(root, targetSum - root.val);
}
/* 
// 精简代码
function hasPathSum(root, targetSum) {
	if (!root) return false;
	if (!root.left && !root.right && targetSum === root.val) return true;
	return (
		hasPathSum(root.left, targetSum - root.val) ||
		hasPathSum(root.right, targetSum - root.val)
	);
} */
/**
 * @description 迭代遍历
 * @param  {TreeNode} root
 * @param  {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
	if (root === null) {
		return false;
	}
	const queue = [root];
	const valArr = [0];
	while (queue.length !== 0) {
		const node = queue.shift();
		let val = valArr.shift();
		val += node.val;
		// 为叶子结点，且和等于目标数，返回true
		if (!node.left && !node.right && val === targetSum) {
			return true;
		}
		// 左节点，将当前的数值也对应记录下来
		if (node.left) {
			queue.push(node.left);
			valArr.push(val);
		}
		// 右节点，将当前的数值也对应记录下来
		if (node.right) {
			queue.push(node.right);
			valArr.push(val);
		}
	}
	return false;
}
