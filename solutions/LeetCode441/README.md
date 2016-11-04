## 441. Arranging Coins
### 1+2+3...+k === (k+1)*k / 2, 
The solution to quadratic equation with 1 unknown `ax^2+bx+c` is (-b+sqrt(b^2-4ac))/2a 
Assume `(k+1)*k / 2 === n`, then `n === Math.trunc((Math.sqrt(1+8*n)-1)/2)`