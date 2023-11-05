/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
	let covers = 0;
	const n = nums.length - 1;
	for (let i = 0; i <= covers; i++) {
		covers = Math.max(i + nums[i], covers);
		if (covers >= n) {
			return true;
		}
	}
	return false;
}
