/** https://leetcode.com/problems/combination-sum/description/
 *
 * Combination Sum
 *
 * @param {number[]} candidates
 * @param {number} target
 * @returns {number[][]}
 */
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function dfs(idx: number, sum: number, nums: number[]) {
    if (sum === target) {
      result.push(nums);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      const candidate = candidates[i]!;
      const newSum = sum + candidate;

      if (newSum <= target) {
        dfs(i, newSum, [...nums, candidate]);
      }
    }
  }
  dfs(0, 0, []);

  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]];
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); // []
console.log(combinationSum([2, 3], 6)); // [[ 2, 2, 2 ], [ 3, 3 ]]
