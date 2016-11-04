/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let ans=[], indices=[0,0,0];
    ans[0] = 1;
    while (ans.length<n){
        let min = ans[indices[0]]*2, idxNo = 0;
        if (ans[indices[1]]*3<min) {
                min = ans[indices[1]]*3;
                idxNo = 1;
        }
        if (ans[indices[2]]*5<min) {
                min = ans[indices[2]]*5;
                idxNo = 2;
        }
        if (ans[ans.length-1]<min) {
            ans.push(min);
        }
        indices[idxNo]++;
    }
    return ans[n-1];
};



nthUglyNumber(10);

