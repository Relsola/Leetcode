int search(int* nums, int numsSize, int target) {
	int left = 0, right = numsSize - 1, mid = 0;
	while (left <= right) {
		mid = (left + right) >> 1;
		if (nums[mid] > target) {
			right = mid - 1;
		}
		else if (nums[mid] < target) {
			left = mid + 1;
		}
		else {
			return mid;
		}
	}
	return -1;
}