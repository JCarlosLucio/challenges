/** https://leetcode.com/problems/find-the-difference/
 *
 * @param {string} s
 * @param {string} t
 * @returns {string}
 */
function findTheDifference(s: string, t: string): string {
  const charFreq = new Map<string, number>();

  for (const char of s) {
    charFreq.set(char, (charFreq.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    const count = charFreq.get(char);

    if (!count) {
      return char;
    }
    charFreq.set(char, count - 1);
  }
  return '';
}

console.log(findTheDifference('abcd', 'abcde')); // 'e'
console.log(findTheDifference('', 'y')); // 'y'
console.log(findTheDifference('a', 'aa')); // 'a'
