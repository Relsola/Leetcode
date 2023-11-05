function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description     前序遍历(递归)
 * @param           {TreeNode} root
 * @return          {number[]}
 */
function preorderTraversal(root) {
	const result = [];
	function dfs(root) {
		if (root === null) {
			return;
		}
		// 先序遍历所以从父节点开始
		result.push(root.val);
		// 递归左子树
		dfs(root.left);
		// 递归右子树
		dfs(root.right);
	}
	// 只使用一个参数 使用闭包进行存储结果
	dfs(root);
	return result;
}

/**
 * @description     前序遍历(迭代)
 * @param           {TreeNode} root
 * @return          {number[]}
 */
function preorderTraversal(root, result = []) {
	// 入栈 右 -> 左
	// 出栈 中 -> 左 -> 右
	if (root === null) return result;
	const stack = [root];
	let cur = null;
	while (stack.length) {
		cur = stack.pop();
		result.push(cur.val);
		cur.right && stack.push(cur.right);
		cur.left && stack.push(cur.left);
	}
	return result;
}
