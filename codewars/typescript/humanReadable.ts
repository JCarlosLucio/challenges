/** https://www.codewars.com/kata/52685f7382004e774f0001f7
 *
 * Human Readable Time
 *
 * @param {number} seconds
 * @returns {string}
 */
function humanReadable(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return [hrs, mins, secs].map(prependZero).join(':');
}

function prependZero(num: number): string {
  return `${num < 10 ? '0' : ''}${num}`;
}
