/** https://leetcode.com/problems/find-the-original-typed-string-i/
 *
 * 3330. Find the Original Typed String I
 *
 * @param {string} word
 * @returns {number}
 */
function possibleStringCount(word: string): number {
  let curr = '';
  let count = 1;

  for (const char of word) {
    if (char === curr) {
      count++;
    }

    curr = char;
  }

  return count;
}

console.log(possibleStringCount('abbcccc')); // 5
console.log(possibleStringCount('abcd')); // 1
console.log(possibleStringCount('aaaa')); // 4
console.log(possibleStringCount('ere')); // 1
