/**
 * @param {number} n
 * @return {number}
 */
var numSquares3 = function(n) {
    let ps = [], i = 1;
    while (i*i<=n){
        ps.push(i*i);
        i++;
    }
    
    let f = []; f[0] = 0;
    for (let i=1;i<=n;i++){
        f[i] = Infinity;
        for (let j=0;j<ps.length;j++){
            if (i-ps[j]<0) break;
            if (f[i-ps[j]]+1<f[i]){
                f[i] = f[i-ps[j]]+1;
            }
        }
    }
    return f[n];
};


/**
 * @param {number} n
 * @return {number}
 */
var numSquares2 = function(n) {
    let ps = [], i = 1, min = Infinity;
    while (i*i<=n){
        ps.push(i*i);
        i++;
    }
    doDFS(n, 0, ps.length-1);
    return min
    
    function doDFS(number, l, i0){
        if (l>min) return;
        
        if (number === 0){
            min = l;
            return;
        }
        
        for (let i=i0;i>=0;i--){
            if (number>=ps[i]){
                doDFS(number-ps[i], l+1, i);
            }
        }
    }
};


/**
 * @param {number} n
 * @return {number}
 */
var f=[];
var numSquares = function(n) {
    if (f[0]===undefined) f[0] = 0;
    
    for (let i=f.length;i<=n;i++){
        f[i] = Infinity;
        for (let j=1;j*j<=i;j++){
            f[i] = Math.min(f[i-j*j]+1, f[i]);
        }
    }
    return f[n];
};