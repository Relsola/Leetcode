class Solution {
  public int[] intersection(int[] nums1, int[] nums2) {
    int[] hash = new int[1002];
    int[] result = new int[1002];
    int n = 0;
    for (int i = 0, length = nums1.length; i < length; i++) {
      hash[nums1[i]] = 1;
    }
    for (int i = 0, length = nums2.length; i < length; i++) {
      int num = nums2[i];
      if (hash[num] == 1) {
        hash[num]++;
        result[n] = num;
        n++;
      }
    }
    return Arrays.copyOfRange(result, 0, n);
  }
}
