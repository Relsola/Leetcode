// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 辅助Map
 * @param {TreeNode} root
 * @return {number[]}
 */
function findMode(root) {
	const map = new Map();
	function traverse(root) {
		if (root === null) {
			return;
		}
		traverse(root.left);
		map.set(root.val, (map.get(root.val) ?? 0) + 1);
		traverse(root.right);
	}
	traverse(root);
	let maxCount = map.get(root.val);
	const result = [];
	for (const [key, value] of map) {
		if (value === maxCount) {
			result.push(key);
		}
		if (value > maxCount) {
			result.length = 0;
			maxCount = value;
			result.push(key);
		}
	}
	return result;
}

/**
 * @description 利用二叉树性质
 * @param {TreeNode} root
 * @return {number[]}
 */
function findMode(root) {
	let count = 0;
	let maxCount = 1;
	let pre = root;
	const result = [];

	function traverse(cur) {
		if (cur === null) {
			return;
		}
		traverse(cur.left);
		if (pre.val === cur.val) {
			count++;
		} else {
			count = 1;
		}
		pre = cur;
		if (count === maxCount) {
			result.push(cur.val);
		}
		if (count > maxCount) {
			result.length = 0;
			maxCount = count;
			result.push(cur.val);
		}
		traverse(cur.right);
	}
	traverse(root);
	return result;
}

/**
 * @description 迭代法
 * @param {TreeNode} root
 * @return {number[]}
 */
function findMode(root) {
	const stack = [];
	const result = [];
	let maxCount = 0;
	let count = 0;
	let pre = null;
	let cur = root;
	while (cur !== null || stack.length !== 0) {
		if (cur !== null) {
			stack.push(cur);
			cur = cur.left;
		} else {
			cur = stack.pop();
			if (pre === null) {
				count = 1;
			} else if (pre.val === cur.val) {
				count++;
			} else {
				count = 1;
			}
			if (count === maxCount) {
				result.push(cur.val);
			} else if (count > maxCount) {
				maxCount = count;
				result.length = 0;
				result.push(cur.val);
			}
			pre = cur;
			cur = cur.right;
		}
	}
	return result;
}
