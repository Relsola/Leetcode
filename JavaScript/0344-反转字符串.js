/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

function reverseString(s) {
  let l = -1,
    r = s.length,
    temp;

  while (++l < --r) {
    temp = s[l];
    s[l] = s[r];
    s[r] = temp;
  }
}
