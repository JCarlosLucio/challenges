#include <cstddef>
#include <iostream>
#include <vector>

#include "utils.h"

using std::size_t;
using std::vector;

class Solution {
 public:
  /**
   * @brief 26. Remove Duplicates from Sorted Array
   *
   * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
   * Easy
   *
   * @param nums
   * @return the number of unique elements k
   */
  int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) {
      return 0;
    }

    int k{1};
    for (size_t i{1}; i < nums.size(); ++i) {
      if (nums[i] != nums[i - 1]) {
        nums[static_cast<size_t>(k)] = nums[i];
        k++;
      }
    }

    return k;
  }
};

int main() {
  Solution sol{};

  vector<int> nums1{1, 1, 2};
  std::cout << sol.removeDuplicates(nums1) << ' ';  // 2
  printVector(nums1);                               // [1, 2, 2]

  vector<int> nums2{0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
  std::cout << sol.removeDuplicates(nums2) << ' ';  // 5
  printVector(nums2);  // [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]

  return 0;
}
