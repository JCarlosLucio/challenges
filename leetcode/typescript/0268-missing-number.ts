/** https://leetcode.com/problems/missing-number/
 *
 * @param {number[]} nums
 * @returns {number}
 */
function missingNumber(nums: number[]): number {
  const n = nums.length;
  const total = (n * (n + 1)) / 2;
  const sum = nums.reduce<number>((acc, cur) => acc + cur, 0);

  return total - sum;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
