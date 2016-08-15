/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num===0) return "Zero";
    let threeDigits = "", unit = ["", "Thousand", "Million", "Billion"], unitIdx = 0, ans = "";
    num = num.toString();
    for (let i=num.length-1;i>=0;i--){
        if (threeDigits.length===0){
            ans = unit[unitIdx++] + (ans.length>0 ? " " + ans : "");
        }
        threeDigits = num[i]+threeDigits;
        if (threeDigits.length===3){
            let temp = read(threeDigits);
            if (temp.length>0){
                ans = temp + (ans.length>0? " " + ans : "");
            } else {
                ans = ans.replace(unit[unitIdx-1], "").trim();
            }
            
            threeDigits = "";
        }
    }
    
    if (threeDigits.length>0) ans = read(threeDigits) + (ans.length>0 ? " " + ans : "");
    
    return ans;
    
    function read(str){
        let num = parseInt(str), result = "";
        let tens = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        let digits = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
            "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        
        if (num>=100){// read the hundred digit
            result += digits[Math.trunc(num/100).toString()] + " Hundred";
            num %= 100;
        }
        
        if (num<20){
            result += ((result.length>0 && num>0) ? " ":"") + digits[num];
        } else {
            let temp = Math.trunc(num/10-2);
            result += (result.length>0 ? " ":"") + tens[temp];
            result += ((result.length>0 && num%10!==0) ? " ":"") + digits[num%10];
        }
        return result;
    }
};

numberToWords(10000000000);
numberToWords(10000000010);
numberToWords(100000000);
numberToWords(100);
numberToWords(3053);
numberToWords(3003201);