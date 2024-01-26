function threeSum(nums: number[]): number[][] {
  const result: number[][] = [],
    n = nums.length;
  if (n < 3) {
    return result;
  }
  nums.sort((a, b) => a - b);
  let left: number, right: number, num1: number, num2: number, num3: number, sum: number;
  for (let i = 0; i < n - 2; i++) {
    num1 = nums[i];
    if (num1 > 0) {
      break;
    }
    if (i > 0 && num1 === nums[i - 1]) {
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
        result.push([num1, num2, num3]);
        while (left < right && nums[left] === nums[++left]);
        while (left < right && nums[right] === nums[--right]);
      }
    }
  }

  return result;
}
