//   Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param  {TreeNode} root
 * @return {number[]}
 */

function largestValues(root) {
	const result = [],
		queue = [root];
	if (root === null) {
		return result;
	}

	while (queue.length !== 0) {
		const length = queue.length;
		let max = Number.MIN_SAFE_INTEGER;

		for (let i = 0; i < length; i++) {
			const node = queue.shift();
			max = Math.max(max, node.val);
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		// 把每一层的最大值放到res数组
		result.push(max);
	}
	return result;
}
