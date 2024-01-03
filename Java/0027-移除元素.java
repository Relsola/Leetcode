class Solution {
  public int removeElement(int[] nums, int val) {
    int slowIndex = 0;
    for (int num : nums)
      if (num != val) nums[slowIndex++] = num;
    return slowIndex;
  }
}
