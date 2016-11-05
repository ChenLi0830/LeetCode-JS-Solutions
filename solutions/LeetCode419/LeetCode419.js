/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships2 = function(board) {
  if (board.length===0) return 0;
  let n = board.length,
      m = board[0].length,
      steps = [[-1,0], [1,0], [0,-1], [0,1]],
      ans = 0;
  
  for (let i=0; i<n; i++){
    for (let j=0; j<m; j++){
      if (board[i][j] === "X"){
        ans++;
        board[i][j] = ".";
        let arr = [[i,j]];
        while (arr.length>0){
          let [x,y] = arr.pop();
          steps.forEach(s => {
            let [x2, y2] = [x+s[0], y+s[1]];
            if (x2>=0 && x2<n && y2>=0 && y2<m && (board[x2][y2] === "X")) {
              board[x2][y2] = ".";
              arr.push([x2,y2]);
            }
          })
        }
      }
    }
  }
  
  return ans;
};

var countBattleships = function(board) {
  if (board.length===0) return 0;
  let n = board.length,
      m = board[0].length,
      ans = 0;
  
  for (let i=0; i<n; i++){
    for (let j=0; j<m; j++){
      if (board[i][j] === "X") {
        let topLeftX = (i===0 || board[i-1][j]!=="X") && (j===0 || board[i][j-1]!=="X");
        topLeftX && ans++;
      }
    }
  }
  return ans;
};