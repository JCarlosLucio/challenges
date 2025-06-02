/** https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Longest Palindromic Substring
 *
 * @param {string} s
 * @returns {string}
 */
function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    if (longest.length >= s.length - i) {
      return longest;
    }

    let palindrome = "";
    for (let j = i; j < s.length; j++) {
      palindrome += s[j];
      if (check(palindrome) && palindrome.length > longest.length) {
        longest = palindrome;
      }
    }
  }

  return longest;
}

function check(s: string): boolean {
  // move indexes from each side until they meet in the middle
  // if at any point they are different return false

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// console.log(isPalindrome("bab")); // true
// console.log(isPalindrome("a")); // true
// console.log(isPalindrome("cdd")); // false
// console.log(isPalindrome("cd")); // false
// console.log(isPalindrome("oooo")); // true
// console.log(isPalindrome("")); // true

console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
