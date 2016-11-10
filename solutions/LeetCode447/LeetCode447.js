/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs2 = function(points) {
  let dis, disIndex, ans = 0;
  for (let i=0; i<points.length; i++){
    dis = [];
    disIndex = new Set();
    for (let j=0; j<points.length; j++){
      if (i!==j){
        let distance = calcDis(points[i], points[j]);
        disIndex.add(distance);
        dis[distance] = (~~dis[distance])+1;
      }
    }
    for (let index of disIndex){
      ans += dis[index]*(dis[index]-1);
    }
  }
  
  return ans;
  
  function calcDis(pI, pJ){
    return (pI[0]-pJ[0])*(pI[0]-pJ[0])+(pI[1]-pJ[1])*(pI[1]-pJ[1]);
  }
};

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let ans = 0;
  for (let i=0; i<points.length; i++){
    let dis = [];
    for (let j=0; j<points.length; j++){
      if (i===j) continue;
      let disIJ = getDis(i,j);
      if (dis[disIJ]){
        ans += dis[disIJ].length * 2;
        dis[disIJ].push(j);
      } else {
        dis[disIJ] = [j];
      }
    }
  }
  
  function getDis(i,j){
    return (points[i][0]-points[j][0])*(points[i][0]-points[j][0]) +
        (points[i][1]-points[j][1])*(points[i][1]-points[j][1]);
  }
  
  return ans;
};

numberOfBoomerangs([[0,0],[1,0],[2,0]]);