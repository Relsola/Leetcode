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
function findBottomLeftValue(root) {
	let maxPath = 0,
		result = null;
	function dfs(node, curPath) {
		if (!node.left && !node.right && curPath > maxPath) {
			maxPath = curPath;
			result = node.val;
		}
		node.left && dfs(node.left, curPath + 1);
		node.right && dfs(node.right, curPath + 1);
	}
	dfs(root, 1);
	return result;
}

/**
 * @description 层序遍历
 * @param  {TreeNode} root
 * @return {number}
 */
function findBottomLeftValue(root) {
	if (root === null) {
		return null;
	}
	const queue = [root];
	let result = null;
	while (queue.length !== 0) {
		const length = queue.length;
		for (let i = 0; i < length; i++) {
			const node = queue.shift();
			if (i === 0) {
				result = node.val;
			}
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
	}
	return result;
}
