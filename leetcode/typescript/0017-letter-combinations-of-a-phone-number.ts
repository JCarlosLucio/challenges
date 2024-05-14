const KEYBOARD = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
};

/** https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @returns {string[]}
 */
function letterCombinations(digits: string): string[] {
  const helper = (numChars: string[], acc: string[] = []) => {
    if (!numChars.length) {
      return acc;
    }

    const chars = numChars.shift()!;
    const newAcc: string[] = [];

    for (const a of acc) {
      for (const char of chars) {
        newAcc.push(a + char);
      }
    }

    return helper(numChars, newAcc);
  };

  const letters = digits.split('').map((d) => KEYBOARD[d]);
  const initial = [...(letters.shift() ?? [])];

  return helper(letters, initial);
}

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));

// with backtracking
// function letterCombinations(digits: string): string[] {
//   const combinations: string[] = [];

//   function backtrack(i: number, curStr: string) {
//     if (curStr.length === digits.length) {
//       combinations.push(curStr);
//       return;
//     }

//     for (const char of KEYBOARD[digits[i]]) {
//       backtrack(i + 1, curStr + char);
//     }
//   }

//   if (digits) {
//     backtrack(0, '');
//   }

//   return combinations;
// }
