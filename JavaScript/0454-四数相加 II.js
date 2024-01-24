/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
function fourSumCount(nums1, nums2, nums3, nums4) {
  const twoSumMap = new Map(),
    n = nums1.length;
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      const sum = nums1[i] + nums2[k];
      twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1);
    }
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      const sum = nums3[i] + nums4[k];
      result += twoSumMap.get(0 - sum) || 0;
    }
  }
  return result;
}
