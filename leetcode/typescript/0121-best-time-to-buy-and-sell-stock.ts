/** https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices: number[]): number {
  let min = prices[0];
  let maxDiff = 0;
  for (let i = 1; i < prices.length; i++) {
    const curr = prices[i];
    min = Math.min(min, curr);
    maxDiff = Math.max(maxDiff, curr - min);
  }

  return maxDiff;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
