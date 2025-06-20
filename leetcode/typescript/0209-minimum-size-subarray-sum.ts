/** https://leetcode.com/problems/minimum-size-subarray-sum
 *
 * Minimum Size Subarray Sum
 *
 * @param {number} target
 * @param {number[]} nums
 * @returns {number}
 */
function minSubArrayLen(target: number, nums: number[]): number {
  // Sliding Window
  let min = Infinity;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]!;

    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left]!;
      left++;
    }
  }

  return min === Infinity ? 0 : min;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5])); // 3
console.log(minSubArrayLen(7, [1, 1, 1, 1, 7])); // 1

// function minSubArrayLen(target: number, nums: number[]): number {
//   let min = Infinity;
//   let left = 0;
//   let right = left;
//   let sum = 0;

//   while (left < nums.length) {
//     sum += nums[right]!;

//     if (sum >= target) {
//       min = Math.min(min, right - left + 1);
//     }

//     if (sum >= target || right >= nums.length) {
//       sum -= nums[left]!;
//       sum -= nums[right]!;
//       left++;
//     } else {
//       right++;
//     }
//   }

//   return min === Infinity ? 0 : min;
// }
