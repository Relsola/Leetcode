function intersection(nums1, nums2) {
	if (nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1];

	const nums1Set = new Set(nums1);
	const result = new Set();

	for (let i = nums2.length - 1; i >= 0; i--) {
		const value = nums2[i];
		nums1Set.has(value) && result.add(value);
	}

	return Array.from(result);
}
