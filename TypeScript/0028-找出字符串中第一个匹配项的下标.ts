function strStr(haystack: string, needle: string): number {
  if (needle === '') {
    return 0;
  }
  const [m, n] = [haystack.length, needle.length];
  const next = new Array(n + 1).fill(-1);

  for (let i = 1, k = -1; i < n; i++) {
    while (k >= 0 && needle[i] !== needle[k + 1]) {
      k = next[k];
    }
    if (needle[i] === needle[k + 1]) {
      k++;
    }
    next[i] = k;
  }

  for (let i = 0, k = -1; i < m; i++) {
    while (k >= 0 && haystack[i] !== needle[k + 1]) {
      k = next[k];
    }
    if (haystack[i] === needle[k + 1]) {
      k++;
    }
    if (k === n - 1) {
      return i - k;
    }
  }

  return -1;
}
