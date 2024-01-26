/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let l: number = -1,
    r: number = s.length;
  while (++l < --r) {
    [s[l], s[r]] = [s[r], s[l]];
  }
}
