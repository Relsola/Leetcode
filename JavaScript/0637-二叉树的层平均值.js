function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function averageOfLevels(root) {
	const result = [],
		queue = [root];
	if (root === null) {
		return result;
	}

	while (queue.length !== 0) {
		// 记录每一层的和  每一层节点个数
		let sum = 0,
			length = queue.length;
		for (let i = 0; i < length; i++) {
			const node = queue.shift();
			sum += node.val;
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		// 每一层的平均值存入数组result
		result.push(sum / length);
	}

	return result;
}
