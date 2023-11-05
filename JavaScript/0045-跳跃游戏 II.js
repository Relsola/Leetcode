/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
	const n = nums.length - 1;
	let curIndex = 0;
	let nextIndex = 0;
	let steps = 0;
	for (let i = 0; i < n; i++) {
		nextIndex = Math.max(nums[i] + i, nextIndex);
		if (i === curIndex) {
			curIndex = nextIndex;
			steps++;
		}
	}
	return steps;
}
