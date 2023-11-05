// Definition for a Node.
function Node(val, children) {
	this.val = val;
	this.children = children;
}

/**
 * @param  {Node|null} root
 * @return {number[]}
 */
function preorder(root) {
	const result = [];
	function dfs(root) {
		if (root === null) {
			return;
		}
		result.push(root.val);
		for (const item of root.children) {
			dfs(item);
		}
	}
	dfs(root);
	return result;
}

/**
 * @param  {Node|null} root
 * @return {number[]}
 */
function preorder(root, result = []) {
	if (root === null) {
		return result;
	}
	const stack = [root];
	while (stack.length !== 0) {
		const node = stack.pop();
		if (node === null) {
			result.push(stack.pop().val);
			continue;
		}
		for (let i = node.children.length - 1; i >= 0; i--) {
			stack.push(node.children[i]);
		}
		stack.push(node, null);
	}
	return result;
}
