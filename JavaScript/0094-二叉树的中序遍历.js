function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description     中序遍历(递归)
 * @param           {TreeNode} root
 * @return          {number[]}
 */
function inorderTraversal(root) {
	const result = [];
	function dfs(root) {
		if (root === null) {
			return;
		}
		dfs(root.left);
		result.push(root.val);
		dfs(root.right);
	}
	dfs(root);
	return result;
}

/**
 * @description     中序遍历(迭代)
 * @param           {TreeNode} root
 * @return          {number[]}
 */
function inorderTraversal(root, result = []) {
	// 入栈 左 -> 右
	// 出栈 左 -> 中 -> 右
	const stack = [];
	let cur = root;
	while (stack.length || cur) {
		if (cur) {
			stack.push(cur);
			// 左
			cur = cur.left;
		} else {
			// --> 弹出 中
			cur = stack.pop();
			result.push(cur.val);
			// 右
			cur = cur.right;
		}
	}
	return result;
}
