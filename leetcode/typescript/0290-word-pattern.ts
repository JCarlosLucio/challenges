/** https://leetcode.com/problems/word-pattern
 * @param {string} pattern
 * @param {string} s
 * @returns {boolean}
 */
function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ');

  if (pattern.length !== words.length) return false;

  const charMap = new Map<string, string>();
  const wordMap = new Map<string, string>();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const char = pattern[i];

    if (charMap.has(char) && charMap.get(char) !== word) {
      return false;
    }
    if (wordMap.has(word) && wordMap.get(word) !== char) {
      return false;
    }

    charMap.set(char, word);
    wordMap.set(word, char);
  }

  return true;
}

console.log(wordPattern('abba', 'dog cat cat dog')); // true
console.log(wordPattern('abba', 'dog cat cat fish')); // false
console.log(wordPattern('aaaa', 'dog cat cat dog')); // false
