/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let slow = 0,
    length = nums.length;

  for (let fast = 0; fast < length; fast++)
    if (nums[fast] !== val) nums[slow++] = nums[fast];

  return slow;
}
