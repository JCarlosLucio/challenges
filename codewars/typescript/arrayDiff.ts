/** https://www.codewars.com/kata/523f5d21c841566fde000009/typescript
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((el) => !b.includes(el));
}

console.log(arrayDiff([], [4, 5])); // []
console.log(arrayDiff([3, 4], [3])); // [4]
console.log(arrayDiff([1, 8, 2], [])); // [1,8,2]
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
