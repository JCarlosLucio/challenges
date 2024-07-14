/** https://leetcode.com/problems/valid-perfect-square/
 *
 * @param {number} num
 * @returns {boolean}
 */
function isPerfectSquare(num: number): boolean {
  let left = 1;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const squared = mid ** 2;
    if (squared === num) {
      return true;
    }

    if (squared > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
