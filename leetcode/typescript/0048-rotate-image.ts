/** https://leetcode.com/problems/rotate-image/
 *
 * 48. Rotate Image
 * Medium
 *
 * Do not return anything, modify matrix in-place instead.
 *
 */
function rotate(matrix: number[][]): void {
  const ROWS = matrix.length;
  const COLS = matrix[0]!.length;

  let startCol = 0;
  for (let i = 0; i < ROWS; i++) {
    const row = matrix[i]!;
    for (let j = startCol; j < COLS; j++) {
      const num = row[j]!;
      //    invert coords [0,1] -> [1,0]
      const temp = matrix[j]![i]!;
      //    swap values
      matrix[j]![i] = num;
      matrix[i]![j] = temp;
    }
    startCol++;
  }

  // reverse rows
  for (let i = 0; i < ROWS; i++) {
    matrix[i]?.reverse();
  }
  console.log(matrix);
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
