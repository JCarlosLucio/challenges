/** https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * Median of two sorted arrays
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  const m = nums1.length;
  const n = nums2.length;
  let left = 0;
  let right = m;

  while (left <= right) {
    const partitionA = Math.floor((left + right) / 2);
    const partitionB = Math.floor((m + n + 1) / 2 - partitionA);

    const maxLeftA = partitionA === 0 ? -Infinity : nums1[partitionA - 1]!;
    const minRightA = partitionA === m ? Infinity : nums1[partitionA]!;
    const maxLeftB = partitionB === 0 ? -Infinity : nums2[partitionB - 1]!;
    const minRightB = partitionB === n ? Infinity : nums2[partitionB]!;

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
        );
      } else {
        return Math.max(maxLeftA, maxLeftB);
      }
    } else if (maxLeftA > minRightB) {
      right = partitionA - 1;
    } else {
      left = partitionA + 1;
    }
  }

  return 0;
}

console.log(findMedianSortedArrays([1, 3], [2])); // 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.50000

// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   const len1 = nums1.length;
//   const len2 = nums2.length;
//   const len = len1 + len2;

//   if (len % 2 === 1) {
//     return solve(nums1, nums2, Math.floor(len / 2), 0, len1 - 1, 0, len2 - 1);
//   } else {
//     return (
//       (solve(nums1, nums2, Math.floor(len / 2 - 1), 0, len1 - 1, 0, len2 - 1) +
//         solve(nums1, nums2, Math.floor(len / 2), 0, len1 - 1, 0, len2 - 1)) /
//       2
//     );
//   }
// }

// function solve(
//   a: number[],
//   b: number[],
//   k: number,
//   aStart: number,
//   aEnd: number,
//   bStart: number,
//   bEnd: number
// ): number {
//   if (aEnd < aStart) {
//     return b[k - aStart]!;
//   }
//   if (bEnd < bStart) {
//     return a[k - bStart]!;
//   }

//   const aIdx = Math.floor((aStart + aEnd) / 2);
//   const bIdx = Math.floor((bStart + bEnd) / 2);
//   const aVal = a[aIdx]!;
//   const bVal = b[bIdx]!;

//   if (aIdx + bIdx < k) {
//     if (aVal > bVal) {
//       return solve(a, b, k, aStart, aEnd, bIdx + 1, bEnd);
//     } else {
//       return solve(a, b, k, aIdx + 1, aEnd, bStart, bEnd);
//     }
//   } else {
//     if (aVal > bVal) {
//       return solve(a, b, k, aStart, aIdx - 1, bStart, bEnd);
//     } else {
//       return solve(a, b, k, aStart, aEnd, bStart, bIdx - 1);
//     }
//   }
// }

// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   const len1 = nums1.length;
//   const len2 = nums2.length;
//
//   let p1 = 0;:
//   let p2 = 0;
//
//   function getMin(): number {
//     if (p1 < len1 && p2 < len2) {
//       return nums1[p1]! < nums2[p2]! ? nums1[p1++]! : nums2[p2++]!;
//     } else if (p1 < len1) {
//       return nums1[p1++]!;
//     } else if (p2 < len2) {
//       return nums2[p2++]!;
//
//     return -1;
//   }
//
//   if ((len1 + len2) % 2 === 0) {
//     for (let i = 0; i < (len1 + len2) / 2 - 1; i++) {
//       getMin();
//     }
//     return (getMin() + getMin()) / 2;
//   } else {
//     for (let i = 0; i < Math.floor((len1 + len2) / 2); i++) {
//       getMin();
//     }
//     return getMin();
//   }
// }

// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   let merged: number[] = [];
//
//   let i = 0;
//   let j = 0;
//
//   while (nums1.length >= i && nums2.length >= j) {
//     const num1 = nums1[i];
//     const num2 = nums2[j];
//
//     console.log(merged, i, num1, j, num2);
//     if (num1 === undefined) {
//       merged = merged.concat(nums2.slice(j));
//       break;
//     }
//     if (num2 === undefined) {
//       merged = merged.concat(nums1.slice(i));
//       break;
//     }
//
//     if (num1 < num2) {
//       merged.push(num1);
//       i++;
//     } else {
//       merged.push(num2);
//       j++;
//     }
//   }
//
//   if (merged.length % 2 !== 0) {
//     return merged[Math.floor(merged.length / 2)]!;
//   }
//
//   return (
//     (merged[Math.floor(merged.length / 2) - 1]! +
//       merged[Math.floor(merged.length / 2)]!) /
//     2
//   );
// }
