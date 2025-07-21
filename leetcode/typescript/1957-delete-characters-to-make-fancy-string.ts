/** https://leetcode.com/problems/delete-characters-to-make-fancy-string/
 *
 * 1957. Delete Characters to Make Fancy String
 * Easy
 *
 * @param {string} s
 * @returns {string}
 */
function makeFancyString(s: string): string {
  let res = '';
  let prev = '';
  let count = 0;
  for (const char of s) {
    if (char === prev) {
      count++;
    } else {
      count = 0;
      prev = char;
    }

    if (count < 2) {
      res += char;
    }
  }

  return res;
}

console.log(makeFancyString('leeetcode')); // "leetcode"
console.log(makeFancyString('aaabaaaa')); // "aabaa"
console.log(makeFancyString('aab')); // "aab"
