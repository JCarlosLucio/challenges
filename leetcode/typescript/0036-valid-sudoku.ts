/** https://leetcode.com/problems/valid-sudoku/
 *
 * 36. Valid Sudoku
 * Medium
 *
 * @param {string[][]} board
 * @returns {boolean}
 */
function isValidSudoku(board: string[][]): boolean {
  // Validate rows
  for (const row of board) {
    const rowSet = new Set<string>();
    for (const num of row) {
      if (num === '.') {
        continue;
      }

      if (rowSet.has(num)) {
        return false;
      }

      rowSet.add(num);
    }
  }

  // Validate boxes
  const STARTING_POSITIONS = [
    [0, 0],
    [0, 3],
    [0, 6],
    [3, 0],
    [3, 3],
    [3, 6],
    [6, 0],
    [6, 3],
    [6, 6],
  ];
  for (const start of STARTING_POSITIONS) {
    const rowIdx = start[0]!;
    const colIdx = start[1]!;

    const boxSet = new Set<string>();
    for (let i = rowIdx; i < rowIdx + 3; i++) {
      const row = board[i]!;
      for (let j = colIdx; j < colIdx + 3; j++) {
        const num = row[j]!;
        if (num === '.') {
          continue;
        }
        if (boxSet.has(num)) {
          return false;
        }
        boxSet.add(num);
      }
    }
  }

  // Validate columns
  const ROWS = board.length;
  const COLS = board[0]!.length;
  for (let i = 0; i < ROWS; i++) {
    const colSet = new Set<string>();
    for (let j = 0; j < COLS; j++) {
      const num = board[j]![i]!;
      if (num === '.') {
        continue;
      }
      if (colSet.has(num)) {
        return false;
      }
      colSet.add(num);
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
); // true

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
); // false

console.log(
  isValidSudoku([
    ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
    ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
    ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
    ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ])
); // false
