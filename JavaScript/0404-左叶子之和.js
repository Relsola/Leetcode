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
function sumOfLeftLeaves(root) {
	//  确定递归函数参数
	function nodesSum(node) {
		// 确定终止条件
		if (node === null) {
			return 0;
		}
		const leftValue = nodesSum(node.left);
		const rightValue = nodesSum(node.right);
		// 单层递归逻辑
		let midValue = 0;
		if (node.left && node.left.left === null && node.left.right === null) {
			midValue = node.left.val;
		}
		let sum = midValue + leftValue + rightValue;
		return sum;
	}
	return nodesSum(root);
}

/**
 * @description 层序遍历
 * @param  {TreeNode} root
 * @return {number}
 */
function sumOfLeftLeaves(root) {
	if (root === null) {
		return 0;
	}
	const queue = [root];
	let sum = 0;
	while (queue.length !== 0) {
		const node = queue.shift();
		if (node.left && node.left.left === null && node.left.right === null) {
			sum += node.left.val;
		}
		node.left && queue.push(node.left);
		node.right && queue.push(node.right);
	}
	return sum;
}
