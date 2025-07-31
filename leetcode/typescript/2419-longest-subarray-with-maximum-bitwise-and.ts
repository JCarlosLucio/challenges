/** https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/
 *
 * 2419. Longest Subarray With Maximum Bitwise AND
 * Medium
 *
 * @param {number[]} nums
 * @returns {number}
 */
function longestSubarray(nums: number[]): number {
  let largest = 0;
  let longest = 0;
  let count = 0;
  let curr = nums[0];
  for (const num of nums) {
    if (num === curr) {
      count++;
    } else {
      curr = num;
      count = 1;
    }
    if (curr === largest && count < longest) {
      continue;
    }
    if (curr >= largest) {
      largest = curr;
      longest = count;
    }
  }
  return longest;
}

console.log(longestSubarray([1, 2, 3, 3, 2, 2])); // 2
console.log(longestSubarray([1, 2, 3, 4])); // 1
console.log(longestSubarray([100, 5, 5])); // 1
console.log(
  longestSubarray([
    323376, 323376, 323376, 323376, 323376, 323376, 323376, 75940, 75940,
  ])
); // 7
console.log(
  longestSubarray([
    96317, 96317, 96317, 96317, 96317, 96317, 96317, 96317, 96317, 279979,
  ])
); // 1
console.log(
  longestSubarray([
    311155, 311155, 311155, 311155, 311155, 311155, 311155, 311155, 201191,
    311155,
  ])
); // 8
