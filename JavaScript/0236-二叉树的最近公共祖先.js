// Definition for a binary tree node.
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
	if (!root || root === p || root === q) {
		return root;
	}
	const left = lowestCommonAncestor(root.left, p, q);
	const right = lowestCommonAncestor(root.right, p, q);
	if (left !== null && right !== null) return root;
	if (left !== null) return left;
	if (right !== null) return right;
	return null;
}
