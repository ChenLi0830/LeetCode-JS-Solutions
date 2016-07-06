/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x===0) return 0;

    let digits = x.toString().length/2, fac1 = 1;
    for (let i=0;i<digits;i++) fac1 *= 10;

    while (Math.abs(fac1*fac1 - x) / x > 0.00001){
        let fac2 = x/fac1;
        fac1 = (fac2+fac1)/2;
    }

    return fac1;
};

//mySqrt(1);
//mySqrt(2);
mySqrt(3);
// num^2 > x


// a^2 = x;
// num^2 > x;