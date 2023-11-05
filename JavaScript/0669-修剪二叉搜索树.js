// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 递归法
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
function trimBST(root, low, high) {
	if (root === null) {
		return null;
	}
	if (root.val < low) {
		return trimBST(root.right, low, high);
	}
	if (root.val > high) {
		return trimBST(root.left, low, high);
	}
	root.left = trimBST(root.left, low, high);
	root.right = trimBST(root.right, low, high);
	return root;
}

/**
 * @description 迭代法
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
function trimBST(root, low, high) {
	while (root !== null && (root.val < low || root.val > high)) {
		if (root.val < low) {
			root = root.right;
		}
		if (root.val > high) {
			root = root.left;
		}
	}
	let curNode = root;
	while (curNode !== null) {
		while (curNode.left !== null && curNode.left.val < low) {
			curNode.left = curNode.left.right;
		}
		curNode = curNode.left;
	}
	curNode = root;
	while (curNode !== null) {
		while (curNode.right !== null && curNode.right.val > high) {
			curNode.right = curNode.right.left;
		}
		curNode = curNode.right;
	}
	return root;
}
