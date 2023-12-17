/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
	const stack = [],
		map = new Map(),
		[m, n] = [nums1.length, nums2.length];
	for (let i = 0; i < n; i++) {
		while (stack.length && nums2[i] > nums2[stack.at(-1)]) {
			const index = stack.pop();
			map.set(nums2[index], nums2[i]);
		}
		stack.push(i);
	}

	const result = [];
	for (let i = 0; i < m; i++) {
		result[i] = map.get(nums1[i]) || -1;
	}

	return result;
}
