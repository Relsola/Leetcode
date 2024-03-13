/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  let result = Infinity,
    n = nums.length,
    left = 0,
    right = 0,
    sum = 0;

  while (right < n) {
    sum += nums[right++];
    while (sum >= target) {
      result = Math.min(result, right - left);
      sum -= nums[left++];
    }
  }

  return result === Infinity ? 0 : result;
}
