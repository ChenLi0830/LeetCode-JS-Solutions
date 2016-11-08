# Minimum Moves to Equal Array Elements
1. Incrementing n-1 elements by 1 is equivalent to incrementing all elements by 1, and then decreasing 1 element left by 1. 
2. In order to make all elements the same, we can ignore the part of incrementing all elements by 1 because it's not going to change the difference between any value. 
3. The number of steps is pretty obvious if every step is to pick an element and reduce it by 1. 
Assume the smallest element in the array is m, then we can get the answer by `ans += nums[i]-m` where `i = [0, n]`