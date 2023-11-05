// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 创建新数组
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
	if (inorder.length === 0) {
		return null;
	}
	// 从后序遍历的数组中获取中间节点的值， 即数组最后一个值
	const rootVal = postorder.pop();
	// 获取中间节点在中序遍历中的下标
	const rootIndex = inorder.indexOf(rootVal);
	// 创建中间节点
	const root = new TreeNode(rootVal);
	// 创建左节点
	root.left = buildTree(
		inorder.slice(0, rootIndex),
		postorder.slice(0, rootIndex)
	);
	// 创建右节点
	root.right = buildTree(
		inorder.slice(rootIndex + 1),
		postorder.slice(rootIndex)
	);
	return root;
}

/**
 * @description 使用数组索引
 * @param  {number[]} inorder
 * @param  {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
	function recur(inorder, postorder, inBegin, inEnd, postBegin, postEnd) {
		if (postBegin === postEnd) {
			return null;
		}
		const rootVal = postorder[postEnd - 1];
		const rootValIndex = inorder.indexOf(rootVal, inBegin);
		const rootNode = new TreeNode(rootVal);

		const leftInorderBegin = inBegin;
		const leftInorderEnd = rootValIndex;
		const rightInorderBegin = rootValIndex + 1;
		const rightInorderEnd = inEnd;

		const leftPostorderBegin = postBegin;
		const leftPostorderEnd = postBegin + rootValIndex - inBegin;
		const rightPostorderBegin = leftPostorderEnd;
		const rightPostorderEnd = postEnd - 1;

		rootNode.left = recur(
			inorder,
			postorder,
			leftInorderBegin,
			leftInorderEnd,
			leftPostorderBegin,
			leftPostorderEnd
		);
		rootNode.right = recur(
			inorder,
			postorder,
			rightInorderBegin,
			rightInorderEnd,
			rightPostorderBegin,
			rightPostorderEnd
		);
		return rootNode;
	}
	return recur(inorder, postorder, 0, inorder.length, 0, inorder.length);
}
