#include <cstddef>
#include <iostream>
#include <string>
#include <vector>

using std::string;
using std::vector;

class Solution {
 public:
  /**
   * @brief 14. Longest Common Prefix
   *
   * https://leetcode.com/problems/longest-common-prefix/description/
   * Write a function to find the longest common prefix string amongst an array
   * of strings.
   * Easy
   *
   * @param strs
   * @return the common prefix
   */
  string longestCommonPrefix(vector<string>& strs) {
    if (strs.empty()) {
      return "";
    }

    string res{strs[0]};
    for (std::size_t i{1}; i < strs.size(); ++i) {
      string cur{""};
      for (std::size_t j{0}; j < strs[i].length(); ++j) {
        if (res[j] != strs[i][j]) {
          break;
        }
        cur += strs[i][j];
      }
      res = cur;
    }

    return res;
  }
};

int main() {
  Solution sol{};

  vector<string> strs1{"flower", "flow", "flight"};
  std::cout << "'" << sol.longestCommonPrefix(strs1) << "'\n";

  vector<string> strs2{"dog", "racecar", "car"};
  std::cout << "'" << sol.longestCommonPrefix(strs2) << "'\n";

  vector<string> strs3{};
  std::cout << "'" << sol.longestCommonPrefix(strs3) << "'\n";

  vector<string> strs4{"baab", "bacb", "b", "cbc"};
  std::cout << "'" << sol.longestCommonPrefix(strs4) << "'\n";

  return 0;
}
