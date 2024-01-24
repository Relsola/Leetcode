class Solution {
  public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
    Map<Integer, Integer> map = new HashMap<>();
    final int n = nums1.length;
    for (int i = 0; i < n; i++) {
      final int num = nums1[i];
      for (int k = 0; k < n; k++) {
        final int sum = num + nums2[k];
        map.put(sum, map.getOrDefault(sum, 0) + 1);
      }
    }
    int result = 0;
    for (int i = 0; i < n; i++) {
      final int num = nums3[i];
      for (int k = 0; k < n; k++) {
        result += map.getOrDefault(-(num + nums4[k]), 0);
      }
    }
    return result;
  }
}
