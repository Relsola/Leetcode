// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @description 创建新数组
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
	if (preorder.length === 0) {
		return null;
	}
	const rootVal = preorder[0];
	const rootNode = new TreeNode(rootVal);
	const rootValIndex = inorder.indexOf(rootVal);
	rootNode.left = buildTree(
		preorder.slice(1, rootValIndex + 1),
		inorder.slice(0, rootValIndex)
	);
	rootNode.right = buildTree(
		preorder.slice(rootValIndex + 1),
		inorder.slice(rootValIndex + 1)
	);
	return rootNode;
}

/**
 * @description 使用数组索引
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
	function recur(preorder, inorder, preBegin, preEnd, inBegin, inEnd) {
		if (preBegin === preEnd) {
			return null;
		}
		const rootVal = preorder[preBegin];
		const rootNode = new TreeNode(rootVal);
		const rootValIndex = inorder.indexOf(rootVal, inBegin);

		const leftPreBegin = preBegin + 1;
		const leftPreEnd = preBegin + rootValIndex - inBegin + 1;
		const leftInBegin = inBegin;
		const leftInEnd = rootValIndex;

		const rightPreBegin = leftPreEnd;
		const rightPreEnd = preEnd;
		const rightInBegin = rootValIndex + 1;
		const rightInEnd = inEnd;

		rootNode.left = recur(
			preorder,
			inorder,
			leftPreBegin,
			leftPreEnd,
			leftInBegin,
			leftInEnd
		);
		rootNode.right = recur(
			preorder,
			inorder,
			rightPreBegin,
			rightPreEnd,
			rightInBegin,
			rightInEnd
		);
		return rootNode;
	}
	return recur(preorder, inorder, 0, preorder.length, 0, inorder.length);
}
