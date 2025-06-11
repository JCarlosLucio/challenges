/** https://leetcode.com/problems/string-to-integer-atoi/
 *
 * String to Integer (atoi)
 *
 * @param {number} s
 * @returns {number}
 */
function myAtoi(s: string): number {
  let numStr = '';
  let isPositive = true;
  let hasSigned = false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === ' ' && numStr.length <= 0 && !hasSigned) {
      continue;
    }

    if (char === '-' && !hasSigned && !numStr) {
      isPositive = false;
      hasSigned = true;
      continue;
    }

    if (char === '+' && !hasSigned && !numStr) {
      hasSigned = true;
      continue;
    }

    const num = parseInt(char ?? '');
    if (Number.isNaN(num)) {
      break;
    }

    numStr += char;
  }

  const ans = isPositive ? Number(numStr) : Number(numStr) * -1;

  if (ans >= 2 ** 31) {
    return 2 ** 31 - 1;
  }
  if (ans < -(2 ** 31)) {
    return -(2 ** 31);
  }

  return ans;
}

console.log(myAtoi('42')); // 42
console.log(myAtoi('   -042')); // -42
console.log(myAtoi('-042')); // -42
console.log(myAtoi('1337c0d3')); // 1337
console.log(myAtoi('words and 987')); // 0
console.log(myAtoi('0-1')); // 0
console.log(myAtoi('-91283472332')); // -2147483648
console.log(myAtoi('3.14159')); // 3
console.log(myAtoi('+1')); // 1
console.log(myAtoi('+-2')); // 0
console.log(myAtoi('   +0 123')); // 0
console.log(myAtoi('2147483648')); // 2147483647
console.log(myAtoi('  +  413')); // 0
