/** https://leetcode.com/problems/climbing-stairs/
 *
 * 70. Climbing Stairs
 * Easy
 *
 * Dynamic Programming - Bottom Up
 *
 * @param {number} n
 * @returns {number}
 */
function climbStairs(n: number): number {
  let one = 1;
  let two = 1;
  for (let i = 0; i < n - 1; i++) {
    const temp = one;
    one = one + two;
    two = temp;
  }
  return one;
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3

// // recursion + memoization
// function climbStairs(n: number): number {
//   const memo: number[] = [];
//   function dfs(n: number, memo: number[]): number {
//     if (n <= 1) {
//       return 1;
//     }
//     if (memo[n]) {
//       return memo[n];
//     }
//     memo[n] = dfs(n - 1, memo) + dfs(n - 2, memo);
//     return memo[n];
//   }
//   return dfs(n, memo);
// }
