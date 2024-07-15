/** https://leetcode.com/problems/ugly-number/
 *
 * @param {number} n
 * @returns {boolean}
 */
function isUgly(n: number): boolean {
  if (n < 1) {
    return false;
  }

  for (let prime of [2, 3, 5]) {
    while (n % prime === 0) {
      n /= prime;
    }
  }

  return n === 1;
}

console.log(isUgly(6)); // true
console.log(isUgly(1)); // true
console.log(isUgly(14)); // false
console.log(isUgly(0)); // false
