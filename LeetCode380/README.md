# 380. Insert Delete GetRandom O(1)

Leetcode doesn't allow to use javascript for this problem. Therefore, Java is used here. 

The combination of ```HashMap``` and ```ArrayList``` are used to solve this problem.

Java不熟悉点：
1. ```ArrayList.add()```和```HashMap.add()```都是insert的形式，当使用```add(index, elem)```，并不会覆盖已经在index的elem2，而是insert elem后把elem2后推了一位.
2. ```ArrayList.get()```和```HashMap.get()```返回都是object，如果要赋值给primitive types, 记得cast, e.g.
```java(Integer)HashMap.get(val)```
