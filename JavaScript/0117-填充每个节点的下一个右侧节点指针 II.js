// Definition for a Node.
function Node(val, left, right, next) {
	this.val = val === undefined ? null : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
	this.next = next === undefined ? null : next;
}

// 和116没有任何差别

/**
 * @param  {Node} root
 * @return {Node}
 */
function connect(root) {
	if (root === null) {
		return root;
	}
	const queue = [root];
	while (queue.length !== 0) {
		const length = queue.length;
		for (let i = 0; i < length; i++) {
			const node = queue.shift();
			if (i < length - 1) {
				node.next = queue[0];
			}
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
	}
	return root;
}
