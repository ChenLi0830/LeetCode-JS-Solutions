/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits = digits.reverse();
    let addOne = true, i=0;
    while (addOne && i<digits.length){
        let num = digits[i]+1;
        if (num===10){
            digits[i] = 0;
        } else {
            digits[i] = num;
            addOne = false;
        }
        i++;
    }
    if (addOne) digits[digits.length] = 1;
    digits = digits.reverse();
    return digits;
};

plusOne([0]);
plusOne([9]);
plusOne([5,0]);
plusOne([5,9]);
plusOne([9,9]);
plusOne([9,9,9,9,9]);