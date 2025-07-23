/** https://leetcode.com/problems/maximum-erasure-value/
 *
 * 1695. Maximum Erasure Value
 * Medium
 *
 * @param {number[]} nums
 * @returns {number}
 */
function maximumUniqueSubarray(nums: number[]): number {
  const seen = new Set<number>();
  let max = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    while (seen.has(nums[right]!)) {
      seen.delete(nums[left]!);
      sum -= nums[left]!;
      left++;
    }
    seen.add(nums[right]!);
    sum += nums[right]!;
    max = Math.max(max, sum);
  }

  return max;
}

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6])); // 17
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])); // 8
console.log(
  maximumUniqueSubarray([
    187, 470, 25, 436, 538, 809, 441, 167, 477, 110, 275, 133, 666, 345, 411,
    459, 490, 266, 987, 965, 429, 166, 809, 340, 467, 318, 125, 165, 809, 610,
    31, 585, 970, 306, 42, 189, 169, 743, 78, 810, 70, 382, 367, 490, 787, 670,
    476, 278, 775, 673, 299, 19, 893, 817, 971, 458, 409, 886, 434,
  ])
); // 16911
