/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const set = new Set(nums1),
    result = new Set();

  for (let i = nums2.length - 1; i >= 0; i--) {
    const value = nums2[i];
    set.has(value) && result.add(value);
  }

  return Array.from(result);
}
