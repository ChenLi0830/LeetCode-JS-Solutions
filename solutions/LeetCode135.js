/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy2 = function(ratings) {
    let ans = 0, f = []; f[0] = 1;
    for (let i=1;i<ratings.length;i++){
        if (ratings[i-1]===ratings[i]) f[i] = 1;
        else if (ratings[i-1]<ratings[i]) f[i] = f[i-1]+1;
        else {//ratings[i-1]>ratings[i]
            f[i] = 1;
            if (f[i-1]===1) {
                let j = i;
                while (ratings[j-1]>ratings[j]){
                    f[j-1] = Math.max(f[j-1], f[j]+1);
                    j--;
                }
            }
        }
    }
    let pair = [];
    for (let i=0;i< f.length;i++) {
        pair[i] = [ratings[i], f[i]];
    }
    for (let i=0;i<f.length;i++) ans+= f[i];
    return ans;
};


var candy = function(ratings) {
    let ans = 0, f = []; f[0] = 1;
    for (let i=1;i<ratings.length;i++){
        if (ratings[i-1]===ratings[i]) f[i] = 1;
        else if (ratings[i-1]<ratings[i]) f[i] = f[i-1]+1;
        else {//ratings[i-1]>ratings[i]
            let end=i-1;
            while (ratings[end]>ratings[end+1]) end++;
            f[i-1] = Math.max(f[i-1], end-i+2);
            for (let j = i;j<=end;j++){
                f[j] = end-j+1;
            }
            i = end;
        }
    }
    for (let i=0;i<f.length;i++) ans+= f[i];
    return ans;
};


candy([58,21,72,77,48,9,38,71,68,77,82,47,25,94,89,54,26,54,54,99,64,71,76,63,81,82,60,64,29,51,87,87,72,12,16,20,21,54,43,41,83,77,41,61,72,82,15,50,36,69,49,53,92,77,16,73,12,28,37,41,79,25,80,3,37,48,23,10,55,19,51,38,96,92,99,68,75,14,18,63,35,19,68,28,49,36,53,61,64,91,2,43,68,34,46,57,82,22,67,89]);