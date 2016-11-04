/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  envelopes.sort((a,b) => {
    if (a[0]!==b[0]) return a[0]-b[0];
    else return a[1]-b[1];
  });
  
  let f = new Array(envelopes.length).fill(1);
  let ans = envelopes.length>0 ? 1 : 0;
  for (let i=1;i<envelopes.length;i++){//first envelope
    for (let j=0;j<i;j++){//second envelope
      if (envelopes[i][0]>envelopes[j][0] && envelopes[i][1]>envelopes[j][1]){
        f[i] = Math.max(f[i], f[j]+1);
        ans = Math.max(ans, f[i]);
      }
    }
  }
  
  return ans;
};

maxEnvelopes([[10,8],[1,12],[6,15],[2,18]]);