/** https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/javascript
 *
 * Double Cola -- Codewars (Retired)
 *
 * @param {string[]} names
 * @param {number} r
 * @returns {string}
 */
function whoIsNext(names, r) {
  let n = 0;
  let length = 0;
  while (length < r) {
    length = doublesLength(n, names.length);
    n++;
  }
  const colaDiff = r - doublesLength(n - 2, names.length);
  const i = Math.ceil(colaDiff / 2 ** (n - 1)) - 1;
  return names[i];
}

/**
 *
 * @param {number} n
 * @param {number} nPersons
 * @returns {number}
 */
const doublesLength = (n = 0, nPersons = 5) => 2 * 2 ** n * nPersons - nPersons;

console.log(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 1)); // "Sheldon"
