// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 递归遍历
 * @param  {TreeNode} root
 * @param  {number} targetSum
 * @return {number[][]}
 */
function pathSum(root, targetSum) {
	const result = [];
	function recur(node, cnt, path) {
		// 遇到了叶子节点且找到了和为sum的路径
		if (cnt == 0 && !node.left && !node.right) {
			result.push([...path]);
			return;
		}
		// 遇到叶子节点而没有找到合适的边，直接返回
		if (!node.left && !node.right) {
			return;
		}
		// 左 （空节点不遍历）
		if (node.left) {
			path.push(node.left.val);
			recur(node.left, cnt - node.left.val, path); // 递归
			path.pop(); // 回溯
		}
		// 右 （空节点不遍历）
		if (node.right) {
			path.push(node.right.val);
			recur(node.right, cnt - node.right.val, path); // 递归
			path.pop(); // 回溯
		}
		return;
	}
	if (root === null) {
		return result;
	}
	recur(root, targetSum - root.val, [root.val]);
	return result;
}

// 精简版
function pathSum(root, targetSum) {
	const result = [],
		curPath = [];
	function recur(node, count) {
		curPath.push(node.val);
		count -= node.val;
		if (!node.left && !node.right && !count) {
			result.push([...curPath]);
		}
		node.left && recur(node.left, count);
		node.right && recur(node.right, count);
		curPath.pop();
	}
	if (root === null) {
		return result;
	}
	recur(root, targetSum);
	return result;
}