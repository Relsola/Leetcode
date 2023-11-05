/**
 * @description  快慢指针移除元素
 * @param        {number[]} nums
 * @param        {number} val
 * @return       {number}
 */
function removeElement(nums, val) {
	let k = 0;
	const n = nums.length;
	for (let i = 0; i < n; i++) {
		if (nums[i] !== val) {
			nums[k++] = nums[i];
		}
	}
	return k;
}
