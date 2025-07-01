/** https://leetcode.com/problems/longest-harmonious-subsequence/
 *
 * 594. Longest Harmonious Subsequence
 *
 * @param {number[]} nums
 * @returns {number}
 */
function findLHS(nums: number[]): number {
  const counter = new Map<number, number>();
  let res = 0;

  for (const num of nums) {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  }

  for (const num of nums) {
    const nextCount = counter.get(num + 1);
    if (nextCount !== undefined) {
      res = Math.max(res, nextCount + (counter.get(num) ?? 0));
    }
  }

  return res;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS([1, 2, 3, 4])); // 2
console.log(findLHS([1, 1, 1, 1])); // 0
