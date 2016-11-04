/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  let first = new Array(4).fill(false),
      firstV = [8,4,2,1],
      second = new Array(6).fill(false),
      secondV = [32,16,8,4,2,1],
      ans = [];
  
  doSearch(0, 0);
  return ans;
  
  function doSearch(l, index){
    if (l===num){
      let solution = readTime();
      if (solution.length>0) ans.push(solution);
      return;
    }
    
    for (let i=index;i<10;i++){
      if (i<=3) first[i] = true;
      else second[i-4] = true;
      doSearch(l+1, i+1);
      if (i<=3) first[i] = false;
      else second[i-4] = false;
    }
  }
  
  function readTime(){
    let h = 0, m = 0;
    first.forEach((on,i)=>{
      if (on) h += firstV[i];
    });
    
    second.forEach((on,i) => {
      if (on) m += secondV[i];
    });
    if (h>11 || m > 59) return "";
    h = String(h);
    m = String(m);
    if (m.length===1) m = "0"+m;
    return h + ":" + m;
  }
};

readBinaryWatch(1);
readBinaryWatch(2);