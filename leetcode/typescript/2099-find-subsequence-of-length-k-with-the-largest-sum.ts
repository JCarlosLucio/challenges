/**
 *
 * 2099. Find Subsequence of Length K With the Largest Sum
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function maxSubsequence(nums: number[], k: number): number[] {
  return nums
    .map((n, i) => [n, i])
    .sort((a, b) => a[0]! - b[0]!)
    .slice(nums.length - k)
    .sort((a, b) => a[1]! - b[1]!)
    .map((n) => n[0]!);
}

console.log(maxSubsequence([2, 1, 3, 3], 2)); //[3,3]
console.log(maxSubsequence([-1, -2, 3, 4], 3)); // [-1,3,4]
console.log(maxSubsequence([3, 4, 3, 3], 2)); // [3,4] or [4, 3]
