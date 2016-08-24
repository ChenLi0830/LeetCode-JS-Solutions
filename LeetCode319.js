/**
 * @param {number} n
 * @return {number}
 */
let f = [0];

var bulbSwitch2 = function(n) {
    if (f.length-1<n){
        for (let i=f.length;i<=n;i++){
            let x = 0;
            for (let j=1;j<=i;j++){
                if (i%j===0) x++;
            }
            f[i] = f[i-1] + (x%2===1);
        }
    }
    return f[n];
};

var bulbSwitch = function(n) {
    let i = 0, ans = 0;
    while ((i+1)*(i+1)<=n){
        i++;
        ans++;
    }
    return ans;
};

bulbSwitch(5);
bulbSwitch(3);
bulbSwitch(6);
bulbSwitch(8);