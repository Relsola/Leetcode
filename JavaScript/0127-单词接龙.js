/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (wordSet.size === 0 || !wordSet.has(endWord)) {
    return 0;
  }
  const queue = [beginWord];
  const visitMap = new Map().set(beginWord, 1);

  while (queue.length !== 0) {
    let word = queue.shift();
    let path = visitMap.get(word);

    for (let i = 0, n = word.length; i < n; i++) {
      for (let c = 97; c <= 122; c++) {
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (newWord === endWord) {
          return path + 1;
        }
        if (wordSet.has(newWord) && !visitMap.has(newWord)) {
          visitMap.set(newWord, path + 1);
          queue.push(newWord);
        }
      }
    }
  }
  return 0;
}
