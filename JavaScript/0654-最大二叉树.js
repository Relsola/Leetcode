// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param  {number[]} nums
 * @return {TreeNode}
 */
function constructMaximumBinaryTree(nums) {
	function buildTree(arr, left, right) {
		if (left > right) {
			return null;
		}
		let maxValue = -1;
		let maxIndex = -1;
		for (let i = left; i <= right; ++i) {
			if (arr[i] > maxValue) {
				maxValue = arr[i];
				maxIndex = i;
			}
		}
		let root = new TreeNode(maxValue);
		root.left = buildTree(arr, left, maxIndex - 1);
		root.right = buildTree(arr, maxIndex + 1, right);
		return root;
	}
	const root = buildTree(nums, 0, nums.length - 1);
	return root;
}
