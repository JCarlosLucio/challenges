#include <algorithm>
#include <cstddef>
#include <iostream>
#include <string>
#include <unordered_map>

using std::max;
using std::size_t;
using std::string;
using std::unordered_map;

class Solution {
 public:
  /**
   * @brief Find the length of the longest substring without duplicates.
   *
   * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
   * Medium
   *
   * @param s A string
   * @return Length of the substring
   */
  int lengthOfLongestSubstring(string s) {
    size_t start{0};
    int longest{0};
    unordered_map<char, size_t> seen{};

    for (size_t i{0}; i < s.size(); i++) {
      char cur{s.at(i)};
      start = max(start, seen[cur]);
      seen[cur] = i + 1;
      longest = max(longest, static_cast<int>(i - start + 1));
    }

    return longest;
  }
};

int main() {
  Solution sol{};

  std::cout << sol.lengthOfLongestSubstring("abcabcbb") << '\n';  // 3
  std::cout << sol.lengthOfLongestSubstring("bbbbb") << '\n';     // 1
  std::cout << sol.lengthOfLongestSubstring("pwwkew") << '\n';    // 3
  std::cout << sol.lengthOfLongestSubstring("S") << '\n';         // 1

  return 0;
}
