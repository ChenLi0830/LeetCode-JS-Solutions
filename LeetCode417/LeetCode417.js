/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  if (matrix.length===0) return [];
  let toAtlantic = [],
      toPacific = [],
      m = matrix.length,
      n = matrix[0].length,
      ans = [];
  
  for (let i=0; i<m; i++) {
    toAtlantic[i] = [];
    toPacific[i] = [];
  }
  
  for (let i=0; i<m; i++){
    for (let j=0; j<n; j++){
      let canFlow = helper(i,j);
      if (canFlow[0]&&canFlow[1]) ans.push([i,j]);
    }
  }
  
  return ans;
  
  function helper(x,y){
    let ans = [toAtlantic[x][y], toPacific[x][y]];
    // Deal with edge case
    if (x===0 || y===0) ans[0] = true;
    if (x===m-1 || y===n-1) ans[1] = true;
    
    if (ans[0]===undefined || ans[1]===undefined) {
      toAtlantic[x][y] = ans[0] || false;
      toPacific[x][y] = ans[1] || false;
      let temp1 = (x-1>=0 && y>=0 && x-1<m && y<n && matrix[x][y] >= matrix[x-1][y]) ? helper(x-1,y): [false, false] ,
          temp2 = (x+1>=0 && y>=0 && x+1<m && y<n && matrix[x][y] >= matrix[x+1][y]) ? helper(x+1,y): [false, false] ,
          temp3 = (x>=0 && y-1>=0 && x<m && y-1<n && matrix[x][y] >= matrix[x][y-1]) ? helper(x,y-1): [false, false] ,
          temp4 = (x>=0 && y+1>=0 && x<m && y+1<n && matrix[x][y] >= matrix[x][y+1]) ? helper(x,y+1): [false, false] ;
      
      ans[0] = ans[0] || temp1[0] || temp2[0] || temp3[0] || temp4[0];
      ans[1] = ans[1] || temp1[1] || temp2[1] || temp3[1] || temp4[1];
      toAtlantic[x][y] = ans[0];
      toPacific[x][y] = ans[1];
      //Update those connected areas with same heights
      updateMatrix(x,y);
    }
    return ans;
  }
  
  //BFS update matrix
  function updateMatrix(x,y){
    let step = [[-1, 0], [1,0], [0,-1], [0,1]],
        hashSet = new Set(),
        arr = [[x,y]];
    
    hashSet.add(x * n + y);
    
    while (arr.length>0){
      let elem = arr.pop();
      toAtlantic[elem[0]][elem[1]] = toAtlantic[elem[0]][elem[1]] || toAtlantic[x][y];
      toPacific[elem[0]][elem[1]] = toPacific[elem[0]][elem[1]] || toPacific[x][y];
      
      step.forEach(s => {
        let x2 = elem[0]+s[0], y2 = elem[1] + s[1];
        if (x2>=0 && x2<m && y2>=0 && y2<n && matrix[x2][y2] === matrix[elem[0]][elem[1]]){
          let weight = x2 * n + y2;
          if (!hashSet.has(weight)){
            arr.push([x2, y2]);
            hashSet.add(weight);
          }
        }
      })
    }
  }
};

// pacificAtlantic([[1,2,3],[8,9,7],[7,6,5]]);
pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]);
