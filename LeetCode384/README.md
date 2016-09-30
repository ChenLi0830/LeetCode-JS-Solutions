Shuffle an Array
两层循环

第一层 Randomly generate Index from 0 to size-1-i, i为 the number of values picked from the array
* index = (int)(Math.random() * (size-i))


第二层 Traverse the array and pick the element whose is located at index = index (ignore the values that have been picked).
Keep track of the visited value using a boolean array.
