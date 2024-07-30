/** https://leetcode.com/problems/pascals-triangle-ii/
 *
 * @param {number} rowIndex
 * @returns {number[]}
 */
function getRow(rowIndex: number): number[] {
  const result = [[1]];
  for (let i = 1; i <= rowIndex; i++) {
    const lastRow = result[i - 1];
    const newRow: number[] = [1];
    for (let j = 1; j < i + 1; j++) {
      const last = lastRow[j - 1] ?? 0;
      const cur = lastRow[j] ?? 0;

      newRow.push(last + cur);
    }

    result.push(newRow);
  }

  return result.pop() ?? [];
}

console.log(getRow(3)); // [1,3,3,1]
console.log(getRow(0)); // [1]
console.log(getRow(1)); // [1,1]
