function sortedSquares(nums: number[]): number[] {
	let left: number = 0,
		size: number = nums.length,
		right: number = size - 1;
	const arr: number[] = new Array(size);
	while (size > 0) {
		if (Math.abs(nums[left]) > nums[right]) {
			arr[--size] = nums[left++] ** 2;
		} else {
			arr[--size] = nums[right--] ** 2;
		}
	}
	return arr;
}
