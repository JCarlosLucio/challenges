/** https://leetcode.com/problems/fruits-into-baskets-ii/
 *
 * 3477. Fruits Into Baskets II
 * Easy
 *
 * Solution: Simulation - Brute Force (because of small input size)
 *
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @returns {number}
 */
function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  let total = 0;
  for (const fruit of fruits) {
    let unplaced = 1;
    for (let i = 0; i < baskets.length; i++) {
      if (fruit <= baskets[i]!) {
        baskets[i] = 0;
        unplaced = 0;
        break;
      }
    }
    total += unplaced;
  }

  return total;
}

console.log(numOfUnplacedFruits([4, 2, 5], [3, 5, 4])); // 1
console.log(numOfUnplacedFruits([3, 6, 1], [6, 4, 7])); // 0

// function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
//     const used = new Set<number>();
//     for (const fruit of fruits) {
//         for (let i = 0; i < baskets.length; i++) {
//             const basket = baskets[i]!;
//             if (fruit <= basket) {
//                 if (!used.has(i)) {
//                     used.add(i);
//                     break;
//                 }
//             }
//         }
//     }

//     return baskets.length - used.size;
// };
