/** https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * Two Sum II - Input Array Is Sorted
 *
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(numbers: number[], target: number): number[] {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    if (target > numbers[l]! + numbers[r]!) {
      l++;
    } else if (target < numbers[l]! + numbers[r]!) {
      r--;
    } else {
      return [l + 1, r + 1];
    }
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([-1, 0], -1)); // [1, 2]
