/** https://leetcode.com/problems/plus-one/
 *
 * @param {number[]} digits
 * @returns {number[]}
 */
function plusOne(digits: number[]): number[] {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;

    if (sum > 9) {
      digits[i] = 0;
    } else {
      digits[i] = sum;
      carry--;
      break;
    }
  }

  if (carry) {
    digits.unshift(1);
  }

  return digits;
}

console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
