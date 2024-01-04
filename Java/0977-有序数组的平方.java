class Solution {
  public int[] sortedSquares(int[] nums) {
    int index = nums.length - 1, left = 0, right = index;
    int[] result = new int[index + 1];
    while (left <= right) {
      int num1 = nums[left] * nums[left], num2 = nums[right] * nums[right];
      if (num1 > num2) {
        result[index--] = num1;
        ++left;
      } else {
        result[index--] = num2;
        --right;
      }
    }
    return result;
  }
}
