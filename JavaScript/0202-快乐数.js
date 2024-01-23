/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  const map = new Map();
  while (true) {
    if (map.has(n)) {
      return false;
    }
    if (n === 1) {
      return true;
    }
    map.set(n, true);
    n = getSum(n);
  }
}

/**
 * 计算n中每一位的平方和
 * @param {number} n
 * @return {number}
 */
function getSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += (n % 10) ** 2;
    n = (n / 10) >> 0;
  }
  return sum;
}
