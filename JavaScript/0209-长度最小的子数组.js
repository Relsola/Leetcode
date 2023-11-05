/**
 * @param  {number} target
 * @param  {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
	const n = nums.length;
	let start = 0, // 滑动窗口起始位置
		end = 0, // 滑动窗口终止位置
		sum = 0, // 滑动窗口数值之和
		ans = 0; // 滑动窗口的长度

	while (end < n) {
		sum += nums[end++];
		while (sum >= target) {
			ans = Math.min(ans, end - start);
			if (ans === 1) return ans;
			// 变更子序列的起始位置
			sum -= nums[start++];
		}
	}
	return ans;
}
