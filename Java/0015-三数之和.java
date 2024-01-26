class Solution {
  public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    final int n = nums.length;
    if (n < 3) {
      return result;
    }
    Arrays.sort(nums);
    int left, right, num1, num2, num3, sum;
    for (int i = 0; i < n - 2; i++) {
      num1 = nums[i];
      if (num1 > 0) {
        break;
      }
      if (i > 0 && num1 == nums[i - 1]) {
        continue;
      }
      left = i + 1;
      right = n - 1;
      while (left < right) {
        num2 = nums[left];
        num3 = nums[right];
        sum = num1 + num2 + num3;
        if (sum > 0) {
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          result.add(Arrays.asList(num1, num2, num3));
          while (left < right && nums[left] == nums[++left]) ;
          while (left < right && nums[right] == nums[--right]) ;
        }
      }
    }
    return result;
  }
}
