/** https://leetcode.com/problems/third-maximum-number/
 *
 * @param {number[]} nums
 * @returns {number}
 */
function thirdMax(nums: number[]): number {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (const num of nums) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      third = second;
      second = num;
    } else if (num > third && num !== first && num !== second) {
      third = num;
    }
  }

  return third === -Infinity ? first : third;
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([1, 2, 2, 5, 3, 5])); // 2
