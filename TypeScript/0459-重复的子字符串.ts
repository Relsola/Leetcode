function repeatedSubstringPattern(s: string): boolean {
  let t: string = s + s;
  return t.slice(1, t.length - 1).includes(s);
}
