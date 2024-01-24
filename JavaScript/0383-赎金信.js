/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const rn = ransomNote.length,
    mn = magazine.length;
  if (rn > mn) {
    return false;
  }
  const hash = new Array(26).fill(0),
    base = 'a'.charCodeAt();

  for (let i = 0; i < mn; i++) {
    hash[magazine[i].charCodeAt() - base]++;
  }
  for (let i = 0; i < rn; i++) {
    if (--hash[ransomNote[i].charCodeAt() - base] < 0) {
      return false;
    }
  }
  return true;
}
