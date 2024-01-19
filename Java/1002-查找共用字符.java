class Solution {
  public ArrayList<String> commonChars(String[] words) {
    ArrayList<String> result = new ArrayList<String>();
    int[] hash = new int[26];

    String firstWord = words[0];
    for (int i = 0, n = firstWord.length(); i < n; i++) hash[firstWord.charAt(i) - 'a']++;

    for (String word : words) {
      int[] otherHash = new int[26];
      for (int i = 0, n = word.length(); i < n; i++) otherHash[word.charAt(i) - 'a']++;
      for (int i = 0; i < 26; i++) hash[i] = Math.min(hash[i], otherHash[i]);
    }

    for (int i = 0; i < 26; i++) {
      int num = hash[i];
      while (num > 0) {
        result.add(String.valueOf((char) (i + 'a')));
        num--;
      }
    }
    return result;
  }
}
