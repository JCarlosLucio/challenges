/** https://leetcode.com/problems/number-complement/
 *
 * @param {number} num
 * @returns {number}
 */
function findComplement(num: number): number {
  const binary = num.toString(2);
  let complement = '';
  for (const n of binary) {
    if (n === '1') {
      complement += '0';
    } else {
      complement += '1';
    }
  }

  return parseInt(complement, 2);
}

console.log(findComplement(5)); // 2
console.log(findComplement(1)); // 0
