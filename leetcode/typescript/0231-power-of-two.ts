/** https://leetcode.com/problems/power-of-two/
 *
 * @param {number} n
 * @returns {boolean}
 */
function isPowerOfTwo(n: number): boolean {
  return n > 0 && (Math.log10(n) / Math.log10(2)) % 1 === 0;
}
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(536870912)); // true
