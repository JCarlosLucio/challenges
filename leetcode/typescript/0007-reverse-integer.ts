/** https://leetcode.com/problems/reverse-integer/
 *
 * Reverse Integer
 *
 * @param {number} x
 * @returns {number}
 */
function reverse(x: number): number {
  let y = Math.abs(x);
  let rev = 0;
  const MAX_32_BIT_SIGNED_INT = 2 ** 31 - 1;

  while (y > 0) {
    rev = rev * 10 + (y % 10);

    if (rev > MAX_32_BIT_SIGNED_INT) {
      return 0;
    }

    y = Math.floor(y / 10);
  }

  return x > 0 ? rev : rev * -1;
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1534236469)); // 0
