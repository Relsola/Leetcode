// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 辅助数组解决
 * @param  {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
	const traversalArr = [];
	function inorderTraverse(root) {
		if (root === null) {
			return;
		}
		inorderTraverse(root.left);
		traversalArr.push(root.val);
		inorderTraverse(root.right);
	}
	inorderTraverse(root);
	for (let i = 0, n = traversalArr.length - 1; i < n; i++) {
		if (traversalArr[i] >= traversalArr[i + 1]) {
			return false;
		}
	}
	return true;
}

/**
 * @description 递归中解决
 * @param  {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
	let maxValue = -Infinity;
	function inorderTraverse(root) {
		if (root === null) {
			return true;
		}
		let leftValid = inorderTraverse(root.left);
		if (!leftValid) {
			return false;
		}
		if (maxValue < root.val) {
			maxValue = root.val;
		} else {
			return false;
		}
		let rightValid = inorderTraverse(root.right);
		return leftValid && rightValid;
	}
	return inorderTraverse(root);
}

/**
 * @description 迭代法
 * @param  {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
	const stack = [];
	let cur = root;
	let pre = null;
	while (cur !== null || stack.length !== 0) {
		if (cur !== null) {
			stack.push(cur);
			cur = cur.left;
		} else {
			cur = stack.pop();
			if (pre !== null && cur.val <= pre.val) {
				return false;
			}
			pre = cur;
			cur = cur.right;
		}
	}
	return true;
}
