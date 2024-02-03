/**
 * @param {string} s
 * @return {boolean}
 */

function repeatedSubstringPattern(s) {
  /**
   * @description     获取前缀表
   * @param           {string} str
   * @return          {number[]}
   */
  function getNext(str) {
    const next = [];
    let k = -1;
    next[0] = k;
    for (let i = 1, length = str.length; i < length; i++) {
      while (k >= 0 && str[i] !== str[k + 1]) {
        k = next[k];
      }
      if (str[i] === str[k + 1]) {
        k++;
      }
      next.push(k);
    }
    return next;
  }

  const next = getNext(s);
  const sLength = s.length;
  const nextLength = next.length;
  const suffixLength = next[nextLength - 1] + 1;

  if (suffixLength > 0 && sLength % (sLength - suffixLength) === 0) {
    return true;
  }
  return false;
}
