# 383. Ransom Note

### 方法1：统计字母数量
Count the number of each letters in ransom Note and magazine. If the number of any letter in ransom Note is greater
than that of magazine, return false;

### 方法2：统计 magazine letter 的使用情况
Traverse all letters in the ransom note. Use a second loop to traverse all letters in magazine. If note letter ===
magazine letter and it's not used, then
1. mark this letter as used
2. start to heck the next letter in ransom note