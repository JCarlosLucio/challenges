/** https://leetcode.com/problems/two-sum
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const numIdx = numMap.get(target - nums[i]);

    if (numIdx !== undefined) {
      return [numIdx, i];
    }

    numMap.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
