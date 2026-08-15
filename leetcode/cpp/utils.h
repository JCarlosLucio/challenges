#ifndef UTILS_H

#include <iostream>
#include <string_view>
#include <vector>

template <typename T>
void printVector(const std::vector<T>& vec,
                 const std::string_view prefix = "") {
  std::cout << prefix;
  std::cout << '[';
  for (std::size_t i{0}; i < vec.size(); ++i) {
    std::cout << vec[i];
    if (i < vec.size() - 1) {
      std::cout << ", ";
    }
  }

  std::cout << "]\n";
}

#endif  // !UTILS_H
