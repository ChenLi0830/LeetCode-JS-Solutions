/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow2 = function(x, n) {
    let ans = 1;
    for (let i=0;i<Math.abs(n);i++){
        ans *= x;
    }
    return n>=0 ? ans : 1/ans;
};

var myPow = function(x, n) {
    if (n===0) return 1;
    if (n<0){
        x = 1/x;
        n = -n;
    }
    let ans = calcPow(x,n);
    return ans;

    function calcPow(x,n){
        if (n===1) return x;
        if (n%2===1){
            return x * calcPow(x*x, Math.floor(n/2));
        } else {
            return calcPow(x*x,n/2);
        }
    }
};

//myPow(34.00515, -3);
myPow(2, 5);
myPow(2, 6);
myPow(8.84372, -5);
