/** https://leetcode.com/problems/find-lucky-integer-in-an-array/
 *
 * 1394. Find Lucky Integer in an Array
 * Easy
 *
 * @param {number[]} arr
 * @returns {number}
 */
function findLucky(arr: number[]): number {
  const counter = new Map<number, number>();

  for (const num of arr) {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  }

  let lucky = -1;
  for (const [num, count] of counter) {
    if (num === count) {
      lucky = Math.max(lucky, num);
    }
  }

  return lucky;
}

console.log(findLucky([2, 2, 3, 4])); // 2
console.log(findLucky([1, 2, 2, 3, 3, 3])); // 3
console.log(findLucky([2, 2, 2, 3, 3])); // -1
