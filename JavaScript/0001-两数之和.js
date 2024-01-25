/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const hash = new Map();
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    if (hash.has(target - num)) {
      return [i, hash.get(target - num)];
    }
    hash.set(num, i);
  }
}
