/** https://leetcode.com/problems/spiral-matrix/
 *
 * 54. Spiral Matrix
 * Medium
 *
 * @param {number[][]} matrix
 * @returns {number[]}
 */
function spiralOrder(matrix: number[][]): number[] {
  const DIRECTIONS = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];

  const ordered: number[] = [];

  function traverse(dir: number, coord: number[]) {
    const [row, col] = coord;
    const curr = matrix[row!]![col!]!;

    if (curr || curr === 0) {
      ordered.push(curr);
      matrix[row!]![col!] = NaN;
    }

    let [rowDir, colDir] = DIRECTIONS[dir]!;
    let rowNext = row! + rowDir!;
    let colNext = col! + colDir!;
    let next: number | undefined = matrix[rowNext]?.[colNext];
    let tries = 0;

    while (!next && next !== 0) {
      if (tries > 1) {
        return ordered;
      }

      dir = (dir + 1) % DIRECTIONS.length;
      [rowDir, colDir] = DIRECTIONS[dir]!;
      rowNext = row! + rowDir!;
      colNext = col! + colDir!;
      next = matrix[rowNext]?.[colNext];

      tries++;
    }

    traverse(dir, [rowNext, colNext]);
  }
  traverse(0, [0, 0]);

  return ordered;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1,2,3,6,9,8,7,4,5]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); // [1,2,3,4,8,12,11,10,9,5,6,7]
