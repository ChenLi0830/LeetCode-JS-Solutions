/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ans = [], solution = [];
    doSearch(0,0)
    return ans;

    function doSearch(l, i0){
        if (l===4){
            let sCopy = solution.slice(0).join(".");
            ans[ans.length] = sCopy;
        }
        for (let iL= 1;iL<=3;iL++){
            let num = parseInt(s.substr(i0,iL)), index = i0+iL;
            //The left substring must have >= 1 && <=3 digits for each to be filled number
            if (s.length-index >= 4-l-1 && s.length-index <= (4-l-1)*3 && num<=255){
                solution[l] = num;
                doSearch(l+1, index);
            }
            if (s[i0]==="0") break;
        }
    }
};


