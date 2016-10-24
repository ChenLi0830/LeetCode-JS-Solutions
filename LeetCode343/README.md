# Integer Break

## Greedy
Can be solved using Greedy algorithm. Namely, trying to break the number into the form of `3*3*3...*4`
Some special cases need also to be dealt with, i.e. `n == 2` and `n == 3`.

## Dynamic Programming
Dynamic programming is a general solution for this type of problems. We should use it when the math pattern is hard to find. 

### Initial State
`f[2] = 2; f[3] = 3;`

### Transition equation
 `f[i] = Math.max(f[i], f[j] * (i-j))` where 2<j<i
