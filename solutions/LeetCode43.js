/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1==="0"||num2==="0") return "0";
    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");

    let multResult = [], ans = "";
    for (let i = 0;i<num2.length;i++){
        multResult[i] = multiply(num2[i], num1); let zeros = "";
        for (let j=0;j<i;j++) {
            zeros = zeros + "0";
        }
        multResult[i] = zeros + multResult[i];
    }

    ans = addNumbers(multResult);
    ans = ans.split("").reverse().join("");
    return ans;

    function multiply(digitStr, numStr){
        let thisDigit, nextDigit=0, ans = "";
        for (let i=0;i<numStr.length;i++){
            thisDigit = nextDigit; nextDigit = 0;
            thisDigit += parseInt(digitStr) * parseInt(numStr[i]);
            nextDigit = Math.floor(thisDigit/10);
            thisDigit = thisDigit%10;

            ans = ans + thisDigit.toString();
        }
        if (nextDigit>0) ans = ans + nextDigit.toString();
        return ans;
    }

    function addNumbers(numbers){
        let nextDigit=0, thisDigit, ans = "";
        for (let digit = 0; digit<numbers[numbers.length-1].length;digit++){
            thisDigit=nextDigit; nextDigit = 0;

            for (let i=0;i<numbers.length;i++){
                if (numbers[i][digit]){
                    thisDigit += numbers[i][digit]-"0";
                }
            }
            nextDigit = Math.floor(thisDigit/10);
            thisDigit = thisDigit%10;

            ans += thisDigit.toString();
        }
        if (nextDigit>0) ans += nextDigit.toString();
        return ans;
    }

};

//console.assert(multiply("123", "876")==="107748");
console.assert(multiply("0", "0")==="0");