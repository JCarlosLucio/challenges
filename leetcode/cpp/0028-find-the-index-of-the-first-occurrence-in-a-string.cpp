#include <cstddef>
#include <iostream>
#include <string>

using std::size_t;
using std::string;

class Solution {
 public:
  /**
   * @brief 28. Find the Index of the First Occurrence in a String
   *
   * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
   * Given two strings needle and haystack, return the index of the first
   * occurrence of needle in haystack, or -1 if needle is not part of haystack.
   * Easy
   *
   * @param haystack
   * @param needle
   * @return the index of the first occurrence of needle in haystack or -1 if
   * not found
   */
  int strStr(string haystack, string needle) {
    for (size_t i{0}; i < haystack.size(); ++i) {
      if (haystack[i] == needle[0]) {
        for (size_t j{0}; j < needle.size(); ++j) {
          if (haystack[i + j] != needle[j]) {
            break;
          }

          if (j == (needle.size() - 1)) {
            return static_cast<int>(i);
          }
        }
      }
    }

    return -1;
  }
};

int main() {
  Solution sol{};
  std::cout << sol.strStr("sadbutsad", "sad") << '\n';   // 0
  std::cout << sol.strStr("leetcode", "leeto") << '\n';  // -1
  std::cout << sol.strStr("sadbutsad", "but") << '\n';   // 3
  std::cout << sol.strStr("a", "a") << '\n';             // 0
  return 0;
}
