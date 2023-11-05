// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 递归遍历
 * @param  {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths(root) {
	const result = [];
	// 确定递归函数 函数参数
	function getPath(node, curPath = "") {
		// 确定终止条件，到叶子节点就终止
		if (!node.left && !node.right) {
			curPath += node.val;
			result.push(curPath);
			return;
		}
		// 确定单层递归逻辑
		curPath += node.val + "->";
		node.left && getPath(node.left, curPath);
		node.right && getPath(node.right, curPath);
	}
	getPath(root);
	return result;
}

/**
 * @description 迭代遍历
 * @param  {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths(root) {
	if (!root) {
		return [];
	}
	const stack = [root],
		paths = [""],
		result = [];
	while (stack.length) {
		const node = stack.pop();
		let path = paths.pop();
		if (!node.left && !node.right) {
			// 到叶子节点终止, 添加路径到结果中
			result.push(path + node.val);
			continue;
		}
		path += node.val + "->";
		if (node.right) {
			// 右节点存在
			stack.push(node.right);
			paths.push(path);
		}
		if (node.left) {
			// 左节点存在
			stack.push(node.left);
			paths.push(path);
		}
	}
	return result;
}
