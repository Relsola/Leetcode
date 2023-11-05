// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description  递归转有序数组
 * @param {TreeNode} root
 * @return {number}
 */
function getMinimumDifference(root) {
	const helperArr = [];
	function recur(root) {
		if (root === null) {
			return;
		}
		recur(root.left);
		helperArr.push(root.val);
		recur(root.right);
	}
	recur(root);
	let minResult = Infinity;
	helperArr.reduce((pre, cur) => {
		minResult = Math.min(minResult, cur - pre);
		return cur;
	});
	return minResult;
}

/**
 * @description  在递归的过程中更新最小值
 * @param {TreeNode} root
 * @return {number}
 */
function getMinimumDifference(root) {
	let minResult = Infinity;
	let preNode = null;
	function recur(root) {
		if (root === null) {
			return;
		}
		recur(root.left);
		if (preNode !== null) {
			minResult = Math.min(minResult, root.val - preNode.val);
		}
		preNode = root;
		recur(root.right);
	}
	recur(root);
	return minResult;
}

/**
 * @description 迭代遍历
 * @param {TreeNode} root
 * @return {number}
 */
function getMinimumDifference(root) {
	const stack = [];
	let minResult = Infinity;
	let cur = root;
	let pre = null;
	while (cur !== null || stack.length !== 0) {
		if (cur !== null) {
			stack.push(cur);
			cur = cur.left;
		} else {
			cur = stack.pop();
			if (pre !== null) {
				minResult = Math.min(minResult, cur.val - pre.val);
			}
			pre = cur;
			cur = cur.right;
		}
	}
	return minResult;
}
