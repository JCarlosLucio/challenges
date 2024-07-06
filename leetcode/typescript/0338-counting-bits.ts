/** https://leetcode.com/problems/counting-bits/
 *
 * @param {number} n
 * @returns {number[]}
 */
function countBits(n: number): number[] {
  const ans = new Array<number>(n + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }

  return ans;
}

console.log(countBits(2));
console.log(countBits(5));
