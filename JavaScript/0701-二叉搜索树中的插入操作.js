// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 递归有返回值
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoBST(root, val) {
	if (root === null) {
		return new TreeNode(val);
	}
	if (root.val > val) {
		root.left = insertIntoBST(root.left, val);
	} else {
		root.right = insertIntoBST(root.right, val);
	}
	return root;
}

/**
 * @description 递归无返回值
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoBST(root, val) {
	if (root === null) {
		return new TreeNode(val);
	}
	function recur(root, val) {
		if (root === null) {
			if (parentNode.val > val) {
				parentNode.left = new TreeNode(val);
			} else {
				parentNode.right = new TreeNode(val);
			}
			return;
		}
		parentNode = root;
		if (root.val > val) {
			return recur(root.left, val);
		} else {
			return recur(root.right, val);
		}
	}
	let parentNode = root;
	recur(root, val);
	return root;
}

/**
 * @description 迭代法
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoBST(root, val) {
	if (root === null) {
		return new TreeNode(val);
	}
	let curNode = root;
	let parentNode = null;
	while (curNode !== null) {
		parentNode = curNode;
		if (curNode.val > val) {
			curNode = curNode.left;
		} else {
			curNode = curNode.right;
		}
	}
	if (parentNode.val > val) {
		parentNode.left = new TreeNode(val);
	} else {
		parentNode.right = new TreeNode(val);
	}
	return root;
}
