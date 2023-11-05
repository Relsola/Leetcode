// Definition for a Node.
function Node(val, children) {
	this.val = val;
	this.children = children;
}

/**
 * @description 层序遍历
 * @param  {Node|null} root
 * @return {number}
 */
function maxDepth(root) {
	let depth = 0;
	if (!root) {
		return depth;
	}
	const queue = [root];
	while (queue.length !== 0) {
		const length = queue.length;
		depth++;
		for (let i = 0; i < length; i++) {
			const node = queue.shift();
			for (const item of node.children) {
				queue.push(item);
			}
		}
	}
	return depth;
}

/**
 * @description 递归遍历
 * @param  {Node|null} root
 * @return {number}
 */
function maxDepth(root) {
	if (!root) return 0;
	let depth = 0;
	for (let node of root.children) {
		depth = Math.max(depth, maxDepth(node));
	}
	return depth + 1;
}

/* 
function maxDepth(root) {
	if (!root) return 0;
	root.children.push(null);
	return 1 + Math.max(...root.children.map(node => maxDepth(node)));
}
 */
