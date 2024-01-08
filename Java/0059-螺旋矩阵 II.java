class Solution {
  public int[][] generateMatrix(int n) {
    int loop = 0, start = 0, count = 1;
    int[][] result = new int[n][n];

    int x, y;
    while (loop++ < n / 2) {
      for (x = start; x < n - loop; x++)
        result[start][x] = count++;
      for (y = start; y < n - loop; y++)
        result[y][x] = count++;
      for (; x >= loop; x--)
        result[y][x] = count++;
      for (; y >= loop; y--)
        result[y][x] = count++;
      start++;
    }

    if ((n & 1) == 1) result[start][start] = count;
    return result;
  }
}
