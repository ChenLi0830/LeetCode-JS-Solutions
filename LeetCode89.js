/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let ans = [], numUsed=[], total = Math.pow(2,n), foundAns = false, initialStr = "";
    numUsed[0]=true; ans[0] = 0;

    for (let i=0;i<n;i++) initialStr += "0";
    doSearch(1, initialStr);
    return ans;

    function doSearch(l, s){
        if (foundAns) return;
        if (l===total){
            foundAns = true;
            return;
        }
        for (let i= s.length-1;i>=0;i--){
            let temp = s.substr(0,i)+ (s[i] === "0" ? "1" : "0")+s.substr(i+1), tempNum = parseInt(temp, 2);
            if (!numUsed[tempNum]){
                numUsed[tempNum] = true;
                ans[l] = tempNum;
                doSearch(l+1, temp);
                numUsed[tempNum] = false;
            }
            if (foundAns) return;
        }
    }
};

grayCode(1);
grayCode(2);
grayCode(3);
grayCode(4);