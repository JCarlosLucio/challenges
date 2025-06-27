/** https://leetcode.com/problems/sqrtx/
 *
 * 69. Sqrt(x)
 *
 * @param {number} x
 * @returns {number}
 */
function mySqrt(x: number): number {
  if (x === 0) {
    return 0;
  }

  if (x === 1) {
    return 1;
  }

  let left = 0;
  let right = x;
  let res = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid === x) {
      return mid;
    }

    if (mid * mid > x) {
      right = mid - 1;
    }

    if (mid * mid < x) {
      left = mid + 1;
      res = mid;
    }
  }

  return res;
}

console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(2)); // 1
console.log(mySqrt(5)); // 2
