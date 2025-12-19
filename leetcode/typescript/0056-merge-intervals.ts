/** https://leetcode.com/problems/merge-intervals/description/
 *
 * 56. Merge Intervals
 * Medium
 *
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0]! - b[0]!);
  const merged: number[][] = [intervals[0]!];

  for (const [start, end] of intervals.slice(1)) {
    const last = merged.at(-1)!;
    const lastEnd = last[1]!;

    if (start! <= lastEnd) {
      last[1] = Math.max(lastEnd, end!);
    } else {
      merged.push([start!, end!]);
    }
  }

  return merged;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // [[1,5]]
console.log(
  merge([
    [4, 7],
    [1, 4],
  ])
); // [[1,7]]
