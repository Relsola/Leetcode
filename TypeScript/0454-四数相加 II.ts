function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const twoSumMap: Map<number, number> = new Map<number, number>(),
    n: number = nums1.length;
  for (let i = 0; i < n; i++) {
    const num: number = nums1[i];
    for (let k = 0; k < n; k++) {
      const sum = num + nums2[k];
      twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1);
    }
  }
  let result: number = 0;
  for (let i = 0; i < n; i++) {
    const num: number = nums3[i];
    for (let k = 0; k < n; k++) {
      const sum = num + nums4[k];
      result += twoSumMap.get(0 - sum) || 0;
    }
  }
  return result;
}
