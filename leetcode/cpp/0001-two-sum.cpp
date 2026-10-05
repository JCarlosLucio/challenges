#include <unordered_map>
#include <vector>

#include "utils.h"

using std::unordered_map;
using std::vector;

class Solution {
 public:
  /**
   * @brief 1. Find the indices of the two numbers that sum up to the target.
   *
   * https://leetcode.com/problems/two-sum/description
   * You are given an array of integers nums and an integer target, return
   * indices of the two numbers such that they add up to target.
   * Easy
   *
   * @param nums
   * @param target
   * @return A vector containing the indices of the two numbers that sum up to
   * the target.
   */
  vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, std::size_t> numMap;
    for (std::size_t i{0}; i < nums.size(); i++) {
      int num{nums.at(i)};
      int complement{target - num};
      if (numMap.count(complement)) {
        return {static_cast<int>(numMap[complement]), static_cast<int>(i)};
      }
      numMap[num] = i;
    }

    return {};
  }
};

int main() {
  Solution sol{};

  vector<int> nums1{2, 7, 11, 15};
  printVector(sol.twoSum(nums1, 9));  // [0, 1]

  vector<int> nums2{3, 2, 4};
  printVector(sol.twoSum(nums2, 6));  // [1, 2]

  vector<int> nums3{3, 3};
  printVector(sol.twoSum(nums3, 6));  // [0, 1]

  return 0;
}
