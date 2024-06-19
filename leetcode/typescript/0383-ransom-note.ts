/** https://leetcode.com/problems/ransom-note
 * @param {string} ransomNote
 * @param {string} magazine
 * @returns {boolean}
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  const letters: Record<string, number | undefined> = {};

  for (let i = 0; i < magazine.length; i++) {
    const letter = magazine[i];
    letters[letter] = (letters[letter] ?? 0) + 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const ransomLetter = ransomNote[i];
    const letterQty = letters[ransomLetter] ?? 0;

    if (letterQty < 1) {
      return false;
    }

    letters[ransomLetter] = (letters[ransomLetter] ?? 0) - 1;
  }

  return true;
}

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
