# Shuffle an Array

### 更好的方法：
一层循环，第一层与之前方法类似，生成随机数 ```index = (int)(Math.random() * size)```，之后将在i位置的数与在index位置的数交换，以模拟随机pick。

### 原始方法 - 两层循环

第一层 Randomly generate Index from 0 to size-1-i, i为 the number of values picked from the array
```java
index = (int)(Math.random() * (size-i))
```
第二层 Traverse the array and pick the element whose is located at index = index (ignore the values that have been picked).
Keep track of the visited value using a boolean array.

