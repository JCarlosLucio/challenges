/** https://leetcode.com/problems/number-of-islands/
 * @param {string[][]} grid The grid of islands
 * @returns {number} The number of islands found
 */
function numIslands(grid: string[][]): number {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  let islands = 0;

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === '1') {
        bfs(grid, i, j); // marks all parts of island as visited('0')
        islands++;
      }
    }
  }
  return islands;
}

/** Finds and marks all parts of the island in the grid as visited('0').
 * @param {string[][]} grid The grid of islands
 * @param {number} r The row
 * @param {number} c The columns
 */
function bfs(grid: string[][], r: number, c: number) {
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  const queue = [[r, c]];

  //marks as visited
  grid[r][c] = '0';

  while (queue.length > 0) {
    const [cr, cc] = queue.shift()!;

    directions.forEach(([dr, dc]) => {
      const [nr, nc] = [cr + dr, cc + dc];

      if (grid?.[nr]?.[nc] && grid[nr][nc] === '1') {
        queue.push([nr, nc]);
        grid[nr][nc] = '0';
      }
    });
  }
}

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
); // 1
console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
); // 3
