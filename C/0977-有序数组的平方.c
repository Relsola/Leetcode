/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* sortedSquares(int* nums, int numsSize, int* returnSize) {
  *returnSize = numsSize;

  int* result = malloc(sizeof(int) * numsSize);
  int index = numsSize - 1;
  int left = 0, right = numsSize - 1;

  while (left <= right) {
    if (abs(nums[left]) > nums[right]) {
      result[index--] = nums[left] * nums[left];
      left++;
    } else {
      result[index--] = nums[right] * nums[right];
      right--;
    }
  }
  return result;
}
