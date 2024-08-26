/** https://leetcode.com/problems/longest-consecutive-sequence/
 *
 * @param {number[]} nums
 * @returns {number}
 */
function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums);
  let longest = 0;

  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let count = 1;
      while (numsSet.has(num + count)) {
        count++;
      }
      longest = Math.max(count, longest);
    }
  }
  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
