// Definition for a Node.
function Node(val, children) {
	this.val = val;
	this.children = children;
}

/**
 * @param  {Node|null} root
 * @return {number[][]}
 */
function levelOrder(root) {
	const result = [],
		queue = [root];
	if (root === null) {
		return result;
	}

	while (queue.length !== 0) {
		// 记录每一层节点个数
		const length = queue.length;
		// 存放每层节点
		const curLevel = [];
		for (let i = 0; i < length; i++) {
			const node = queue.shift();
			curLevel.push(node.val);

			// 这里不再是 node.left node.right 而是循坏node.children
			for (const child of node.children) {
				child && queue.push(child);
			}
		}
		result.push(curLevel);
	}

	return result;
}
