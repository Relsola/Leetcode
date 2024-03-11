/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function search(nums, target) {
  let left = 0,
    right = nums.length - 1,
    middle = 0,
    num = 0;

  while (left <= right) {
    middle = (left + right) >> 1;
    num = nums[middle];

    if (nums[middle] === target) {
      return middle;
    } else if (num < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}
