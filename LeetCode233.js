/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let f = [];
    for (let i=0;i<10;i++) f.push([i, i===0? 0 : 1]);
    while (f[f.length-1][0]+1<n){
        let x = f[f.length-1][0], y = f[f.length-1][1];
        for (let i=1;i<10;i++){
            let num = (x+1) + (x+1)*i-1,
                count = x+1 + (i+1)*y;
            f.push([num, count]);
        }
    }
    let ans = 0;
    while (n>0){
        for (let i=f.length-1;i>=0;i--){
            if (f[i][0]<=n){
                ans += f[i][1] + (f[i][0]!==n ? startsWithOne(n):0);
                n -= (f[i][0]+1);
            }
        }
    }
    return ans;
    
    function startsWithOne(n){
        let temp = n.toString();
        if (temp[0] === "1" && temp.length>1) return parseInt(temp.slice(1))+1;
        else return 0;
    }
};



countDigitOne(19);
countDigitOne(1231);
countDigitOne(1252);
countDigitOne(1000);