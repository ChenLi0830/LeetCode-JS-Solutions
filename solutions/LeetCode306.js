/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber2 = function(num) {
    let ans = false, arr = [];
    doSearch(num);
    return ans;
    
    function doSearch(str){
        if (str.length===0 && arr.length>2) {
            ans = true;
            return;
        }
        for (let i=1;i<=str.length;i++){
            if (str[0]!=="0" || i===1) {
                let n = Number(str.slice(0, i));
                if (arr.length >= 2) {
                    if (n === (arr[arr.length - 1] + arr[arr.length - 2])) {
                        arr.push(n);
                        doSearch(str.slice(i));
                        arr.pop();
                    }
                } else {
                    arr.push(n);
                    doSearch(str.slice(i));
                    arr.pop();
                }
            }
        }
    }
};

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    let ans = false, arr = [];
    doSearch(0);
    return ans;
    
    function doSearch(i0){
        if (i0===num.length && arr.length>2) {
            ans = true;
            return;
        }
        for (let i=i0+1;i<=num.length;i++){
            if (num[i0]!=="0" || i===i0+1) {
                let n = Number(num.slice(i0, i));
                if (arr.length >= 2) {
                    if (n === (arr[arr.length - 1] + arr[arr.length - 2])) {
                        arr.push(n);
                        doSearch(i);
                        arr.pop();
                    }
                } else {
                    arr.push(n);
                    doSearch(i);
                    arr.pop();
                }
            }
        }
    }
};

isAdditiveNumber("112358");
isAdditiveNumber("199100199");
