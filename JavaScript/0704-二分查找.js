/**
 * @description 二分查找
 * @param       {number[]} nums
 * @param       {number} target
 * @return      {number}
 */
function search(nums, target) {
	let left = 0,
		right = nums.length - 1,
		middle,
		result;

	while (left <= right) {
		middle = left + ((right - left) >> 1);
		result = nums[middle];
		if (result === target) {
			return middle;
		} else if (result < target) {
			// 去右面闭区间寻找
			left = middle + 1;
		} else {
			// 去左面闭区间寻找
			right = middle - 1;
		}
	}

	return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 2));
