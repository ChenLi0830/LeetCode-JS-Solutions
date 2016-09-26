/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a,b)=>{
    if (a[1]!==b[1]) return a[1] - b[1];
    else return -(a[0] - b[0]);
  });
  let ans = [[-1,0]];
  people.forEach(p => {
    let count = 0;
    // if (ans.length===0) ans.push(p);
    for (let i=0;i<ans.length;i++){
      if (ans[i][0]>=p[0]) count++;
      if (count===p[1]) {
        ans.splice(i+1, 0, p);
        break;
      }
    }
  });
  
  return ans.slice(1);
};

reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]);