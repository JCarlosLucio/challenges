/** https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @returns {boolean}
 */
function isValid(s: string): boolean {
  const stack: string[] = [];
  const opening = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const closing = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (opening[char]) {
      stack.push(char);
    }
    if (closing[char]) {
      if (stack.length < 1 || closing[char] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length < 1;
}

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
