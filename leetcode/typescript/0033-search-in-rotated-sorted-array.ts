/** https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 * 33. Search in Rotated Sorted Array
 * Medium
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    const mid = nums[m]!;
    if (mid === target) {
      return m;
    }

    const left = nums[l]!;
    const right = nums[r]!;

    if (left <= mid!) {
      if (target > mid! || target < left) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else {
      if (target < mid || target > right) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8)); // 4
