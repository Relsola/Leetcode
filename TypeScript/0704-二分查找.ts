function search(nums: number[], target: number): number {
	let left: number = 0,
		right: number = nums.length - 1;
	while (left <= right) {
		const mid = left + ((right - left) >> 1);
		const num: number = nums[mid];
		if (num < target) {
			left = mid + 1;
		} else if (num > target) {
			right = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}
