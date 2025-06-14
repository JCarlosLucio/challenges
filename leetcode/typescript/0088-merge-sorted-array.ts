/** https://leetcode.com/problems/merge-sorted-array
 *
 * Merge Sorted Array
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let last = m + n - 1;

  while (m > 0 && n > 0) {
    const num1 = nums1[m - 1]!;
    const num2 = nums2[n - 1]!;

    if (num1 > num2) {
      nums1[last] = num1;
      m--;
    } else {
      nums1[last] = num2;
      n--;
    }
    last--;
  }

  while (n > 0) {
    nums1[last] = nums2[n - 1]!;
    n--;
    last--;
  }
  console.log(nums1);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [ 1, 2, 2, 3, 5, 6 ]
console.log(merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]
