function twoSum(nums: number[], target: number): number[] {
  for (let i: number = 0, k: number = 1, n: number = nums.length; i < n; i++) {
    if (i + k >= n) {
      i = -1;
      k++;
    } else if (nums[i] + nums[i + k] === target) {
      return [i, i + k];
    }
  }
  return [];
}
