/** https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @returns {number}
 */
function lengthOfLastWord(s: string): number {
  let count = 0;

  for (let i = s.length - 1; i > -1; i--) {
    const isSpace = s[i] === ' ';
    if (isSpace && count === 0) continue;
    if (isSpace) break;
    count++;
  }
  return count;
}

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); // 4
console.log(lengthOfLastWord('luffy is still joyboy')); // 6
