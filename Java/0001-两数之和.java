class Solution {
  public int[] twoSum(int[] nums, int target) {
    for (int i = 0, k = 1, n = nums.length; k < n; i++) {
      if (i + k >= n) {
        i = -1;
        k++;
      } else if (target == nums[i] + nums[i + k]) {
        return new int[]{i, i + k};
      }
    }
    return null;
  }
}
