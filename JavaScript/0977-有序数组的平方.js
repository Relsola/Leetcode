/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
  const n = nums.length,
    result = new Array(n);
  let l = 0,
    r = n - 1,
    left = 0,
    right = 0;

  for (let i = n - 1; i >= 0; --i) {
    left = nums[l] ** 2;
    right = nums[r] ** 2;

    if (left > right) {
      result[i] = left;
      ++l;
    } else {
      result[i] = right;
      --r;
    }
  }

  return result;
}
