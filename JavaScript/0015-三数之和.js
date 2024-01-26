/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const result = [],
    n = nums.length;
  // 将数组排序
  nums.sort((a, b) => a - b);

  let left = 0,
    right = 0;

  for (let i = 0; i < n - 2; i++) {
    left = i + 1;
    right = n - 1;
    iNum = nums[i];
    // 数组排过序，如果第一个数大于0直接返回res
    if (iNum > 0) {
      return result;
    }
    // 去重
    if (iNum === nums[i - 1]) {
      continue;
    }

    while (left < right) {
      let lNum = nums[left],
        rNum = nums[right],
        threeSum = iNum + lNum + rNum;

      // 三数之和小于0，则左指针向右移动
      if (threeSum < 0) left++;
      else if (threeSum > 0) right--;
      else {
        result.push([iNum, lNum, rNum]);
        // 去重
        while (left < right && nums[left] === nums[++left]);
        while (left < right && nums[right] === nums[--right]);
      }
    }
  }

  return result;
}
