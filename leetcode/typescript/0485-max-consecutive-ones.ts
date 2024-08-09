/** https://leetcode.com/problems/max-consecutive-ones/
 *
 * @param {number[]} nums
 * @returns {number}
 */
function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  let count = 0;

  for (let num of nums) {
    count = num === 1 ? count + 1 : 0;
    max = Math.max(count, max);
  }

  return max;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
console.log(findMaxConsecutiveOnes([0])); // 0
