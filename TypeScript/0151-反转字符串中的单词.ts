function reverseWords(s: string): string {
  const charArr = Array.from(s),
    length = charArr.length;

  removeExtraSpace(charArr);
  reverse(charArr, 0, length - 1);

  let start: number = 0;
  for (let i = 0; i <= length; i++) {
    if (charArr[i] === ' ' || i === length) {
      reverse(charArr, start, i - 1);
      start = i + 1;
    }
  }

  return charArr.join('');
}

/**
 * @description 删除多余空格
 */
function removeExtraSpace(charArr: string[]): void {
  let fastIndex: number = 0,
    slowIndex: number = 0,
    length = charArr.length;
  while (fastIndex < length && charArr[fastIndex] === ' ') {
    fastIndex++;
  }
  while (fastIndex < length) {
    if (charArr[fastIndex] === ' ' && charArr[fastIndex - 1] === ' ') {
      fastIndex++;
    } else {
      charArr[slowIndex++] = charArr[fastIndex++];
    }
  }
  charArr.length = charArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex;
}

/**
 * @description 翻转从 start 到 end 的字符
 */
function reverse(charArr: string[], start: number, end: number): void {
  let temp: string;
  while (start < end) {
    temp = charArr[start];
    charArr[start++] = charArr[end];
    charArr[end--] = temp;
  }
}
