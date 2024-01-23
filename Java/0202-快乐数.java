class Solution {
  public boolean isHappy(int n) {
    Set<Integer> set = new HashSet<>();
    while (true) {
      if (set.contains(n)) {
        return false;
      }
      if (n == 1) {
        return true;
      }
      set.add(n);
      n = getSum(n);
    }
  }

  private int getSum(int n) {
    int sum = 0;
    while (n > 0) {
      int temp = n % 10;
      sum += temp * temp;
      n = n / 10;
    }
    return sum;
  }
}
