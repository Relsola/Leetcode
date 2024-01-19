/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const record = new Array(26).fill(0),
    n = s.length,
    base = 'a'.charCodeAt();

  for (let i = 0; i < n; i++) {
    record[s[i].charCodeAt() - base]++;
  }

  for (let i = 0; i < n; i++) {
    if (--record[t[i].charCodeAt() - base] < 0) {
      return false;
    }
  }
  return true;
}
