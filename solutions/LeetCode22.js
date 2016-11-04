/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ans = [];
    getParenthesis(n,n,"");
    return ans;

    function getParenthesis(l,r,s){
        if (l>0) {getParenthesis(l-1,r,s.concat('('))}
        if (r>l) {getParenthesis(l,r-1,s.concat(')'))}
        if (l===0 && r===0){
            ans = ans.concat(s);
        }
    }
};