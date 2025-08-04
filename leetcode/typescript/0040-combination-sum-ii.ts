/** https://leetcode.com/problems/combination-sum-ii/
 *
 * 40. Combination Sum II
 * Medium
 *
 * @param {number[]} candidates
 * @param {number} target
 * @returns {number[][]}
 */
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const res: number[][] = [];

  function dfs(i: number, sum: number, nums: number[]) {
    if (sum === target) {
      res.push([...nums]);
      return;
    }
    if (sum > target || i > candidates.length) {
      return;
    }

    const candidate = candidates[i]!;
    nums.push(candidate);
    dfs(i + 1, sum + candidate, nums);
    nums.pop();

    // skip duplicates
    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
      i++;
    }
    dfs(i + 1, sum, nums);
  }
  dfs(0, 0, []);

  return res;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [[1,1,6],[1,2,5],[1,7],[2,6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); // [[1,2,2],[5]]
