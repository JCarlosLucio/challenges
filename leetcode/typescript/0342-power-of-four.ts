/** https://leetcode.com/problems/power-of-four/
 *
 * @param {number} n
 * @returns {boolean}
 */
function isPowerOfFour(n: number): boolean {
  return n > 0 && (Math.log10(n) / Math.log10(4)) % 1 === 0;
}

console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5)); // false
console.log(isPowerOfFour(1)); // true
