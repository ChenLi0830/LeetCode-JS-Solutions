/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest2 = function(matrix, k) {
  let queue = [];
  for (let i=0; i< matrix[0].length; i++){
    queue.push({
      x: 0,
      y: i,
      val: matrix[0][i]
    });
  }
  
  for (let i=0;i<k-1;i++){
    let minElem = removeMin(queue);
    if (minElem.x+1<matrix.length) {
      queue.push({
        x: minElem.x+1,
        y: minElem.y,
        val: matrix[minElem.x+1][minElem.y]
      })
    }
  }
  let ans = removeMin(queue);
  return ans.val;
  
  function removeMin(queue){
    let min = Infinity, index;
    for (let i=0; i<queue.length; i++){
      let elem = queue[i];
      if (elem.val<min){
        index = i;
        min = elem.val;
      }
    }
    let minElem = queue[index];
    queue.splice(index,1);
    return minElem;
  }
};


var kthSmallest = function(matrix, k) {
  let arr = [];
  for (let row of matrix){
    for (let elem of row){
      arr.push(elem);
    }
  }
  arr.sort((a,b) => a-b);
  return arr[k-1];
};

kthSmallest([
  [ 1,  5,  9],
  [10, 11, 13],
  [12, 13, 15]
], 8);