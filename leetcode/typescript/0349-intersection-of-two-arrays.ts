/** https://leetcode.com/problems/intersection-of-two-arrays/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [...set1].filter((n) => set2.has(n));
}

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
