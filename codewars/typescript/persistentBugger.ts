/** https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/typescript
 *
 * Persistent Bugger
 *
 * @param {number} num
 * @returns {number}
 */
function persistence(num: number): number {
  let bugger = splitToDigits(num);
  let count = 0;
  while (bugger.length > 1) {
    bugger = splitToDigits(bugger.reduce((a, c) => a * c));
    count++;
  }
  return count;
}

function splitToDigits(num: number): number[] {
  return [...(num + '')].map(Number);
}

console.log(persistence(39)); // 3
console.log(persistence(4)); // 0
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4
