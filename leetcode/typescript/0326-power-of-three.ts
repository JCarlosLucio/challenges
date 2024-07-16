/** https://leetcode.com/problems/power-of-three/
 *
 * @param {number} n
 * @returns {boolean}
 */
function isPowerOfThree(n: number): boolean {
  // Recursive
  // if (n === 1) {
  //   return true;
  // }
  // if (n === 0 || n % 3 !== 0) {
  //   return false;
  // }

  // return isPowerOfThree(n / 3);

  return n > 0 && (Math.log10(n) / Math.log10(3)) % 1 === 0;
}

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(-1)); // false
console.log(isPowerOfThree(45)); // false
console.log(isPowerOfThree(243)); // true
