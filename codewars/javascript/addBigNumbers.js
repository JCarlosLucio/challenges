/** https://www.codewars.com/kata/525f4206b73515bffb000b21
 *
 * Adding Big Numbers
 *
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
function add(a, b) {
  const aNums = [...a].reverse().map(Number);
  const bNums = [...b].reverse().map(Number);

  let carry = 0;
  const sums = [];
  for (let i = 0; i < Math.max(aNums.length, bNums.length); i++) {
    const sum = (aNums[i] ?? 0) + (bNums[i] ?? 0) + carry;
    carry = sum > 9 ? 1 : 0;
    sums.push(sum % 10);
  }
  if (carry) {
    sums.push(carry);
  }

  return sums.reverse().join('');
}
