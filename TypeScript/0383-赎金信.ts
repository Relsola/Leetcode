function canConstruct(ransomNote: string, magazine: string): boolean {
  const rn: number = ransomNote.length,
    mn: number = magazine.length;
  if (rn > mn) {
    return false;
  }
  const hash: number[] = new Array(26).fill(0),
    base = 'a'.charCodeAt(0);
  for (let i = 0; i < mn; i++) {
    hash[magazine[i].charCodeAt(0) - base]++;
  }
  for (let i = 0; i < rn; i++) {
    if (--hash[ransomNote[i].charCodeAt(0) - base] < 0) {
      return false;
    }
  }
  return true;
}
