function isHappy(n: number): boolean {
  let slow: number = n,
    fast: number = n;
  do {
    slow = getSum(slow);
    fast = getSum(getSum(fast));
  } while (slow !== fast);
  return slow === 1;
}

function getSum(n: number): number {
  let sum: number = 0;
  while (n > 0) {
    sum += (n % 10) ** 2;
    n = (n / 10) >> 0;
  }
  return sum;
}
