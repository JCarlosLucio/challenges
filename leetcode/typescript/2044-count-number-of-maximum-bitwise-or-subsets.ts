/** https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/
 *
 * 2044. Count Number of Maximum Bitwise-OR Subsets
 * Medium
 *
 * @param {number[]} nums
 * @returns {number}
 */
function countMaxOrSubsets(nums: number[]): number {
  let max = 0;
  const subsets = new Map<number, number>();

  function dfs(idx: number, currOR: number) {
    if (idx >= nums.length) {
      return;
    }

    for (let i = idx; i < nums.length; i++) {
      const newOR = currOR | nums[i]!;
      subsets.set(newOR, (subsets.get(newOR) ?? 0) + 1);
      max = Math.max(max, newOR);

      dfs(i + 1, newOR);
    }
  }
  dfs(0, 0);

  return subsets.get(max) ?? 0;
}

console.log(countMaxOrSubsets([3, 1])); // 2
console.log(countMaxOrSubsets([2, 2, 2])); // 7
console.log(countMaxOrSubsets([3, 2, 1, 5])); // 6
