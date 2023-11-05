// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 递归法
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
	function recur(nums, left, right) {
		if (left > right) {
			return null;
		}
		const mid = Math.floor((left + right) / 2);
		const root = new TreeNode(nums[mid]);
		root.left = recur(nums, left, mid - 1);
		root.right = recur(nums, mid + 1, right);
		return root;
	}
	return recur(nums, 0, nums.length - 1);
}

/**
 * @description 迭代法
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
	if (nums.length === 0) {
		return null;
	}
	const root = new TreeNode(0); // 初始根节点
	const nodeQue = [root]; // 放遍历的节点,并初始化
	const leftQue = [0]; // 放左区间的下标,初始化
	const rightQue = [nums.length - 1]; // 放右区间的下标

	while (nodeQue.length !== 0) {
		const curNode = nodeQue.pop();
		const left = leftQue.pop();
		const right = rightQue.pop();
		const mid = Math.floor((left + right) / 2);

		// 将下标为mid的元素给中间节点
		curNode.val = nums[mid];
		// 处理左区间
		if (left <= mid - 1) {
			curNode.left = new TreeNode(0);
			nodeQue.push(curNode.left);
			leftQue.push(left);
			rightQue.push(mid - 1);
		}
		// 处理右区间
		if (right >= mid + 1) {
			curNode.right = new TreeNode(0);
			nodeQue.push(curNode.right);
			leftQue.push(mid + 1);
			rightQue.push(right);
		}
	}
	return root;
}
