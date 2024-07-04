/** https://leetcode.com/problems/reverse-string/
 *
 * Do not return anything, modify s in-place instead.
 *
 * @param {string[]} s
 * @returns {void}
 */
function reverseString(s: string[]): void {
  const len = s.length;
  for (let i = 0; i < len / 2; i++) {
    const temp = s[i];
    s[i] = s[len - i - 1];
    s[len - i - 1] = temp;
  }
  console.log(s);
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
