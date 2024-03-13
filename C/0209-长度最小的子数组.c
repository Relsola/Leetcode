int minSubArrayLen(int target, int* nums, int numsSize) {
  int left = 0, right = 0, sum = 0, min = numsSize + 1;
  while (right < numsSize) {
    sum += nums[right++];
    while (sum >= target) {
      min = fmin(min, right - left);
      sum -= nums[left++];
    }
  }
  return min == numsSize + 1 ? 0 : min;
}
