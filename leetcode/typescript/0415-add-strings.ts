/** https://leetcode.com/problems/add-strings/
 *
 * @param {string} num1
 * @param {string} num2
 * @returns {string}
 */
function addStrings(num1: string, num2: string): string {
  if (num1.length < num2.length) {
    return addStrings(num2, num1);
  }
  let result = '';
  let carry = 0;
  let i = 1;
  do {
    const sum =
      Number(num1[num1.length - i] ?? 0) +
      Number(num2[num2.length - i] ?? 0) +
      carry;

    result = (sum % 10) + result;

    carry = 0;
    if (sum > 9) {
      carry++;
    }

    i++;
  } while (i <= num1.length || carry);

  return result;
}

console.log(addStrings('11', '123')); // 134
console.log(addStrings('456', '77')); // 533
console.log(addStrings('0', '0')); // 0
console.log(addStrings('408', '5')); // 413
