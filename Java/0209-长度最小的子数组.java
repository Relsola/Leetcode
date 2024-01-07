class Solution {
  public int minSubArrayLen(int target, int[] nums) {
    int sum = nums[0];
    if (sum >= target) return 1;
    int left = 0, right = 0, n = nums.length, result = Integer.MAX_VALUE;
    while (++right < n) {
      sum += nums[right];
      while (sum >= target && left <= right) {
        result = Math.min(result, right - left + 1);
        sum -= nums[left++];
      }
    }
    return result == Integer.MAX_VALUE ? 0 : result;
  }
}
