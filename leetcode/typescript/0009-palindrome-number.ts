/** https://leetcode.com/problems/palindrome-number/
 *  Palindrome Number
 *
 * @param {number} x
 * @returns {boolean}
 */
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const y = x;
  let rev = 0;

  while (x > 0) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return rev == y;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(123)); // false
