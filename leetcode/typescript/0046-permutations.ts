/** https://leetcode.com/problems/permutations/
 *
 * Permutations
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function dfs(perms: number[]) {
    if (perms.length === nums.length) {
      result.push(perms);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]!;

      if (perms.includes(num)) {
        continue;
      }

      dfs([...perms, num]);
    }
  }
  dfs([]);

  return result;
}

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
