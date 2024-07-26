/** https://leetcode.com/problems/single-number/
 *
 * @param {number[]} nums
 * @returns {number}
 */
function singleNumber(nums: number[]): number {
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
}

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
