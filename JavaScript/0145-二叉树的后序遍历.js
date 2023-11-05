function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description     后序遍历(递归)
 * @param           {TreeNode} root
 * @return          {number[]}
 */
function postorderTraversal(root) {
	const result = [];
	function dfs(root) {
		if (root === null) {
			return;
		}
		dfs(root.left);
		dfs(root.right);
		result.push(root.val);
	}
	dfs(root);
	return result;
}

/**
 * @description     后序遍历(迭代)
 * @param           {TreeNode} root
 * @return          {number[]}
 */
function postorderTraversal(root, result = []) {
	// 入栈 左 -> 右
	// 出栈 中 -> 右 -> 左 结果翻转
	if (root === null) {
		return result;
	}
	const stack = [root];
	let cur = null;
	do {
		cur = stack.pop();
		result.push(cur.val);
		cur.left && stack.push(cur.left);
		cur.right && stack.push(cur.right);
	} while (stack.length);
	return result.reverse();
}
