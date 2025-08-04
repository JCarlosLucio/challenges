/** https://leetcode.com/problems/fruit-into-baskets/
 *
 * 904. Fruit Into Baskets
 * Medium
 *
 * Solution: Sliding Window
 *
 * @param {number[]} fruits
 * @returns {number}
 */
function totalFruit(fruits: number[]): number {
  const basket = new Map<number, number>();
  let total = 0;
  let left = 0;

  for (let right = 0; right < fruits.length; right++) {
    const fruit = fruits[right]!;
    basket.set(fruit, (basket.get(fruit) ?? 0) + 1);

    while (basket.size > 2 && left < right) {
      const fruitToRemove = fruits[left]!;
      basket.set(fruitToRemove, (basket.get(fruitToRemove) ?? 0) - 1);

      if ((basket.get(fruitToRemove) ?? 0) <= 0) {
        basket.delete(fruitToRemove);
      }
      left++;
    }
    total = Math.max(total, right - left + 1);
  }

  return total;
}

console.log(totalFruit([1, 2, 1])); // 3
console.log(totalFruit([0, 1, 2, 2])); // 3
console.log(totalFruit([1, 2, 3, 2, 2])); // 4

// function totalFruit(fruits: number[]): number {
//   let total = 0;
//   const basket = new Set<number>();
//   const positions = new Map<number, number>();
//   let count = 0;

//   for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i]!;
//     positions.set(fruit, i);

//     if (basket.size < 2) {
//       basket.add(fruit);
//     }

//     if (basket.has(fruit)) {
//       count++;
//       total = Math.max(total, count);
//     }

//     if (!basket.has(fruit)) {
//       // get lowest fruit position
//       let lowestPos = Infinity;
//       let lowestFruit = Infinity;
//       for (const item of basket) {
//         const pos = positions.get(item)!;
//         if (lowestPos > pos) {
//           lowestPos = pos;
//           lowestFruit = item;
//         }
//       }
//       count = i - lowestPos;
//       basket.delete(lowestFruit);
//       basket.add(fruit);
//       total = Math.max(total, count);
//     }
//   }

//   return total;
// }
