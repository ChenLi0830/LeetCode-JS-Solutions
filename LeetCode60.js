/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let digits = [], result = [];
    k--;
    for (let l=0;l<n;l++){
        let digitI = 0, factorial = 1;
        for (let i=2;i<=n-1-l;i++) factorial*=i;
        while (digits[digitI]) digitI++;

        while (k>=factorial){
            k-=factorial;
            digitI++;
            while (digits[digitI]) digitI++;
        }
        digits[digitI] = true;
        result[l] = digitI+1;
    }
    return result.join("");
};

//getPermutation(5,1);
//getPermutation(5,2);
//getPermutation(5,6);
//getPermutation(5,9);
//getPermutation(5,10);
getPermutation(9,128126);