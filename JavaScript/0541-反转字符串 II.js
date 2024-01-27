/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverseStr(s, k) {
  const n = s.length,
    arr = s.split('');
  let left, right, temp;

  for (let i = 0; i < n; i += 2 * k) {
    left = i - 1;
    right = Math.min(n, i + k);
    while (++left < --right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
  return arr.join('');
}
