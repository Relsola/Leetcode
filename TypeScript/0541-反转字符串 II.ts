function reverseStr(s: string, k: number): string {
  const length: number = s.length,
    arr: string[] = s.split('');
  let left: number, right: number, temp: string;
  for (let i = 0; i < length; i += 2 * k) {
    left = i - 1;
    right = Math.min(length, i + k);
    while (++left < --right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
  return arr.join('');
}
