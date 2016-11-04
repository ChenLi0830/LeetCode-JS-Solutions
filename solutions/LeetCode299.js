/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bull = 0, cow = 0, digits = new Array(10).fill(0);
    for (let i=0;i<secret.length;i++) {
        if (secret[i]===guess[i]) bull++;
        else digits[secret[i]]++;
    }
    
    for (let i=0;i<secret.length;i++){
        if (secret[i]!==guess[i]) {
            if (digits[guess[i]]>0) {
                cow++;
                digits[guess[i]]--;
            }
        }
    }
    return bull.toString()+"A"+cow.toString()+"B";
};

getHint("1807", "7810");
getHint("1123", "0111");
