#include <cstddef>
#include <iostream>
#include <vector>

#include "utils.h"

using std::vector;

class Solution {
 public:
  /**
   * @brief 27. Remove Element
   *
   * https://leetcode.com/problems/remove-element/description/
   * Given an integer array nums and an integer val, remove all occurrences of
   * val in nums in-place.
   * Easy
   *
   * @param nums
   * @param val
   * @return number of elements not equal to val
   */
  int removeElement(vector<int>& nums, int val) {
    if (nums.empty()) {
      return 0;
    }

    int count{0};
    for (const auto& el : nums) {
      if (el != val) {
        count++;
      }
    }

    std::size_t last{nums.size() - 1};
    for (std::size_t i{0}; i < nums.size(); ++i) {
      int num{nums[i]};

      if (num == val && i < last) {
        while (nums[last] == val && last > i) {
          last--;
        }
        nums[i] = nums[last];
        nums[last] = num;
      }
    }

    return count;
  }
};

int main() {
  Solution sol{};
  vector<int> nums{3, 2, 2, 3};
  printVector(nums, "Init: ");
  std::cout << sol.removeElement(nums, 3) << '\n';
  printVector(nums, "End: ");

  vector<int> nums1{0, 1, 2, 2, 3, 0, 4, 2};
  printVector(nums1, "Init: ");
  std::cout << sol.removeElement(nums1, 2) << '\n';
  printVector(nums1, "End: ");

  vector<int> nums2{};
  printVector(nums2, "Init: ");
  std::cout << sol.removeElement(nums2, 0) << '\n';
  printVector(nums2, "End: ");

  vector<int> nums3{2};
  printVector(nums3, "Init: ");
  std::cout << sol.removeElement(nums3, 3) << '\n';
  printVector(nums3, "End: ");

  vector<int> nums4{3, 3};
  printVector(nums4, "Init: ");
  std::cout << sol.removeElement(nums4, 3) << '\n';
  printVector(nums4, "End: ");

  vector<int> nums5{2, 2, 3};
  printVector(nums5, "Init: ");
  std::cout << sol.removeElement(nums5, 2) << '\n';
  printVector(nums5, "End: ");

  return 0;
}
