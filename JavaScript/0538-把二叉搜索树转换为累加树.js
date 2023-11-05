// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 迭代法
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBST(root) {
	let pre = 0;
	function ReverseInOrder(cur) {
		if (cur !== null) {
			ReverseInOrder(cur.right);
			cur.val += pre;
			pre = cur.val;
			ReverseInOrder(cur.left);
		}
	}
	ReverseInOrder(root);
	return root;
}

/**
 * @description 递归法
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBST(root) {
	let pre = 0;
	let cur = root;
	const stack = [];
	while (cur !== null || stack.length !== 0) {
		while (cur !== null) {
			stack.push(cur);
			cur = cur.right;
		}
		cur = stack.pop();
		cur.val += pre;
		pre = cur.val;
		cur = cur.left;
	}
	return root;
}
