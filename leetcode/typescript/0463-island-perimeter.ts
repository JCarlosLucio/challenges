/** https://leetcode.com/problems/island-perimeter/
 *
 * @param {number[][]} grid
 * @returns {number}
 */
function islandPerimeter(grid: number[][]): number {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  let perimeter = 0;

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === 1) {
        perimeter += getPerimeterSides(grid, i, j); // returns perimeter sides
      }
    }
  }

  return perimeter;
}

/** Checks adjacent cells, and returns sides of coast
 * @param {string[][]} grid The grid of islands
 * @param {number} r The row
 * @param {number} c The columns
 */
function getPerimeterSides(grid: number[][], r: number, c: number): number {
  let sides = 4;
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  directions.forEach(([dr, dc]) => {
    const [nr, nc] = [r + dr, c + dc];

    if (grid?.[nr]?.[nc] && grid[nr][nc] === 1) {
      sides--;
    }
  });

  return sides;
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
); // 16
console.log(islandPerimeter([[1]])); // 4
console.log(islandPerimeter([[1, 0]])); // 4
