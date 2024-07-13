/** https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
function findDisappearedNumbers(nums: number[]): number[] {
  const nSet = new Set(nums);
  let res: number[] = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!nSet.has(i)) {
      res.push(i);
    }
  }

  return res;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
