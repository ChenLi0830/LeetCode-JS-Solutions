/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  let f = [];
  stones.forEach((s, i) => {
    f[i] = new Set()
  });
  f[0] = new Set([0]);
  for (let i = 0; i < stones.length; i++) {
    for (let j = i + 1; j < stones.length; j++) {
      let dis = stones[j] - stones[i];
      if (f[i].has(dis) || f[i].has(dis - 1) || f[i].has(dis + 1)) {
        f[j].add(dis);
      }
    }
  }
  return f[stones.length - 1].size > 0;
};

canCross([0, 2]);
canCross([0, 1, 3, 5, 6, 8, 12, 17]);
canCross([0, 1, 2, 3, 4, 8, 9, 11]);