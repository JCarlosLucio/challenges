/** https://leetcode.com/problems/pascals-triangle/
 *
 * @param {number} numRows
 * @returns {number[][]}
 */
function generate(numRows: number): number[][] {
  const result = [[1]];
  for (let i = 1; i < numRows; i++) {
    const lastRow = result[i - 1];
    const newRow: number[] = [1];
    for (let j = 1; j < i + 1; j++) {
      const last = lastRow[j - 1] ?? 0;
      const cur = lastRow[j] ?? 0;

      newRow.push(last + cur);
    }

    result.push(newRow);
  }

  return result;
}

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
