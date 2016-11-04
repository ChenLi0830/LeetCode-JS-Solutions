/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var num = "1";
    for (var i=0;i<n-1;i++){
        num = sayNumber(num);
    }
    return num;

    function sayNumber(str){
        var ans = "", index = 0;
        while (str.charAt(index)) {
            var count = 1;
            while (index < str.length - 1 && (str.charAt(index) === str.charAt(index+1))) {
                index++;
                count++;
            }
            ans = ans + count.toString() + str.charAt(index);
            index++;
        }
        return ans;
    }
};


//countAndSay(3);
countAndSay(11);