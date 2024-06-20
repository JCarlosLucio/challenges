/** https://leetcode.com/problems/add-digits/
 *
 * @param {number} num
 * @returns {number}
 */
function addDigits(num: number): number {
  if (num < 10) {
    return num;
  }

  let sum = 0;
  while (num != 0) {
    sum += num % 10;
    num = Math.trunc(num / 10);
  }

  return addDigits(sum);
}

console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0
