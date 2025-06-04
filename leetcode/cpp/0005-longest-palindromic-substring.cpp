/** https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Longest Palindromic Substring
 *
 */
#include <array>
#include <cstddef>
#include <iostream>
#include <string>
#include <vector>

using std::array;
using std::string;
using std::vector;

class Solution {
public:
    string longestPalindrome(string s) {
        size_t n{s.size()};
        vector<vector<bool>> dp(n, vector<bool>(n));
        array<size_t, 2> ans{0, 0};

        for (size_t i{0}; i < n; ++i) {
            dp[i][i] = true;
        }
        for (size_t i{0}; i < n - 1; ++i) {
            if (s[i] == s[i + 1]) {
                dp[i][i + 1] = true;
                ans = {i, i + 1};
            }
        }

        for (size_t diff = 2; diff < n; ++diff) {
            for (size_t i = 0; i < n - diff; ++i) {
                size_t j = i + diff;
                if (s[i] == s[j] && dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    ans = {i, j};
                }
            }
        }

        size_t i = ans[0];
        size_t j = ans[1];
        return s.substr(i, j - i + 1);
    }
};

int main() {
    std::cout << Solution().longestPalindrome("cbbd") << '\n';   // bb
    std::cout << Solution().longestPalindrome("babad") << '\n';  // bab
    return 0;
}
