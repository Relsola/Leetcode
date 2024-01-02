class Solution {
  public int search(int[] nums, int target) {
    if (target < nums[0] || target > nums[nums.length - 1]) {
      return -1;
    }
    int left = 0, right = nums.length - 1, mid = 0, num = 0;
    while (left <= right) {
      mid = left + ((right - left) >> 1);
      num = nums[mid];
      if (num == target) {
        return mid;
      } else if (num < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
}
