/** https://leetcode.com/problems/keyboard-row/
 *
 * @param {string[]} words
 * @returns {string[]}
 */
function findWords(words: string[]): string[] {
  return words.filter(findWord);
}

function findWord(word: string): boolean {
  const first = new Set('qwertyuiop');
  const second = new Set('asdfghjkl');
  const third = new Set('zxcvbnm');

  const chars = word.toLowerCase().split('');

  let row = first;
  if (second.has(chars[0])) {
    row = second;
  }
  if (third.has(chars[0])) {
    row = third;
  }

  return chars.every((char) => row.has(char));
}
console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])); // ["Alaska","Dad"]
console.log(findWords(['omk'])); // []
console.log(findWords(['adsdf', 'sfd'])); // ["adsdf","sfd"]
