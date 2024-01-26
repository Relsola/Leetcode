class Solution {
  public void reverseString(char[] s) {
    int l = -1, r = s.length;
    while (++l < --r) {
      s[l] ^= s[r];
      s[r] ^= s[l];
      s[l] ^= s[r];
    }
  }
}
