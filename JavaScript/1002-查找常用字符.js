/**
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words) {
  const result = [],
    hash = new Array(26).fill(0),
    base = 'a'.charCodeAt();

  const firstWord = words[0];
  for (let i = 0, n = firstWord.length; i < n; i++) {
    hash[firstWord[i].charCodeAt() - base]++;
  }

  const otherHash = new Array(26).fill(0);
  for (let i = 1, n = words.length; i < n; i++) {
    const word = words[i];
    for (let i = 0, n = word.length; i < n; i++) {
      otherHash[word[i].charCodeAt() - base]++;
    }

    for (let i = 0; i < 26; i++) {
      hash[i] = Math.min(hash[i], otherHash[i]);
    }
    otherHash.fill(0);
  }

  for (let i = 0; i < 26; i++) {
    let num = hash[i];
    while (num > 0) {
      result.push(String.fromCharCode(i + base));
      num--;
    }
  }

  return result;
}
