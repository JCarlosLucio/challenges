/** https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
 *
 * 122. Best Time to Buy and Sell Stock II
 *
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const curr = prices[i]!;
    const prev = prices[i - 1]!;
    if (curr > prev) {
      profit += curr - prev;
    }
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
