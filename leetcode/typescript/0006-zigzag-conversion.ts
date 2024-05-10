/** https://leetcode.com/problems/zigzag-conversion/ *
 * @param {string} s
 * @param {number} numRows
 * @returns {string}
 */
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const rows = new Array(numRows).fill('');

  let row = -1;
  let reverse = false;

  for (let i = 0; i < s.length; i++) {
    row += reverse ? -1 : 1;
    rows[row] += s[i];

    if (row === numRows - 1) {
      reverse = true;
    }
    if (row === 0) {
      reverse = false;
    }
  }

  return rows.join('');
}
console.log(convert('PAYPALISHIRING', 3)); // "PAHNAPLSIIGYIR"
console.log(convert('PAYPALISHIRING', 4)); //  PINALSIGYAHRPI
console.log(convert('A', 1)); // A
console.log(convert('AB', 1)); // AB
