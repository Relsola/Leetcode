// Definition for a binary tree node.
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * @description 递归法
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
	if (root === null) {
		return root;
	}
	if (root.val > p.val && root.val > q.val) {
		// 向左子树查询
		return lowestCommonAncestor(root.left, p, q);
	}
	if (root.val < p.val && root.val < q.val) {
		// 向右子树查询
		return lowestCommonAncestor(root.right, p, q);
	}
	return root;
}

/**
 * @description 迭代法
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
	while (root) {
		if (root.val > p.val && root.val > q.val) {
			root = root.left;
		} else if (root.val < p.val && root.val < q.val) {
			root = root.right;
		} else {
			return root;
		}
	}
	return null;
}
