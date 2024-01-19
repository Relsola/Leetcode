class Solution {
  public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) return false;
    int[] record = new int[26];
    int n = s.length();
    for (int i = 0; i < n; i++) record[s.charAt(i) - 'a']++;
    for (int i = 0; i < n; i++) if (--record[t.charAt(i) - 'a'] < 0) return false;
    return true;
  }
}
