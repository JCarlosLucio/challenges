/** https://leetcode.com/problems/add-binary/
 *
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
function addBinary(a: string, b: string): string {
  let result = '';
  let carry = 0;

  while (a || b || carry) {
    const sum = Number(a.slice(-1)) + Number(b.slice(-1)) + carry;

    if (sum > 1) {
      result = (sum % 2) + result;
      carry = 1;
    } else {
      result = sum + result;
      carry = 0;
    }

    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }

  return result;
}

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
