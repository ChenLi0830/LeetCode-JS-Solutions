/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (points.length===0) return 0;
  points.sort((a,b)=>{
    if (a[1]!=b[1]) return a[1]-b[1];
    else return b[0]-a[0];
  });
  
  let curShot = 1, curMax = points[0][1];
  for (let i=1; i<points.length; i++){
    if (curMax<points[i][0]) {
      curShot++;
      curMax = points[i][1];
    }
  }
  
  return curShot;
};


// findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]);
findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]);
