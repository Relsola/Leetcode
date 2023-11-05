// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 递归法
 * @param  {TreeNode} root1
 * @param  {TreeNode} root2
 * @return {TreeNode}
 */
function mergeTrees(root1, root2) {
	if (root1 === null) {
		return root2;
	}
	if (root2 === null) {
		return root1;
	}
	const resultNode = new TreeNode(root1.val + root2.val);
	resultNode.left = mergeTrees(root1.left, root2.left);
	resultNode.right = mergeTrees(root1.right, root2.right);
	return resultNode;
}

/**
 * @description 迭代法
 * @param  {TreeNode} root1
 * @param  {TreeNode} root2
 * @return {TreeNode}
 */
function mergeTrees(root1, root2) {
	if (root1 === null) {
		return root2;
	}
	if (root2 === null) {
		return root1;
	}

	const queue = [root1, root2];
	while (queue.length !== 0) {
		const node1 = queue.shift();
		const node2 = queue.shift();
		node1.val += node2.val;
		if (node1.left !== null && node2.left !== null) {
			queue.push(node1.left, node2.left);
		}
		if (node1.right !== null && node2.right !== null) {
			queue.push(node1.right, node2.right);
		}
		if (node1.left === null && node2.left !== null) {
			node1.left = node2.left;
		}
		if (node1.right === null && node2.right !== null) {
			node1.right = node2.right;
		}
	}
	return root1;
}
