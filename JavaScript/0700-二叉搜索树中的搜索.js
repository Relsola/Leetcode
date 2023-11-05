// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 递归法
 * @param  {TreeNode} root
 * @param  {number} val
 * @return {TreeNode}
 */
function searchBST(root, val) {
	if (!root || root.val === val) {
		return root;
	}
	if (root.val > val) {
		return searchBST(root.left, val);
	}
	if (root.val < val) {
		return searchBST(root.right, val);
	}
}

/**
 * @description 迭代法
 * @param  {TreeNode} root
 * @param  {number} val
 * @return {TreeNode}
 */
function searchBST(root, val) {
	while (root !== null) {
		if (!root || root.val === val) {
			return root;
		} else if (root.val > val) {
			root = root.left;
		} else if (root.val < val) {
			root = root.right;
		}
	}
	return null;
}
