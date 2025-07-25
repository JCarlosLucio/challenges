/** https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/
 *
 * 3487. Maximum Unique Subarray Sum After Deletion
 * Easy
 *
 * @param {number[]} nums
 * @returns {number}
 */
function maxSum(nums: number[]): number {
  const max = Math.max(...nums);
  if (max < 2) {
    return max;
  }

  const uniques = new Set<number>(nums);
  let sum = 0;
  for (const num of uniques) {
    if (num > 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(maxSum([1, 2, 3, 4, 5])); // 15
console.log(maxSum([1, 1, 0, 1, 1])); // 1
console.log(maxSum([1, 2, -1, -2, 1, 0, -1])); // 3
