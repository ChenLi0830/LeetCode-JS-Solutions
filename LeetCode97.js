/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave3 = function(s1, s2, s3) {
    let ans = false;
    if (s1.length+s2.length!=s3.length) return false;
    doSearch(0,0,0);
    return ans;

    function doSearch(i1,i2,i3){
        if (i3===s3.length) ans = true;
        if (ans) return;
        if (i1<s1.length && s3[i3]===s1[i1]) doSearch(i1+1,i2,i3+1);
        if (i2<s2.length && s3[i3]===s2[i2]) doSearch(i1,i2+1,i3+1);
    }
};

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave2 = function(s1, s2, s3) {
    if (s1.length+s2.length!=s3.length) return false;
    let possibleIndex=[[0,0]], indexBool = [];
    for (let i=0;i<s3.length;i++){
        let size = possibleIndex.length; let toBeDeleted = [];
        for (let j=0;j<size;j++){
            let i1 = possibleIndex[j][0], i2 = possibleIndex[j][1];
            if (!indexBool[i1][i2]){
                indexBool[i1][i2] = true;
            } else {
                toBeDeleted[toBeDeleted.length] = j;
            }
            if (i1<s1.length && i2<s2.length && s1[i1]===s3[i] && s2[i2] === s3[i]){
                possibleIndex[possibleIndex.length] = [i1,i2+1];
                possibleIndex[j][0] = i1+1;
            } else if (i1<s1.length && s1[i1]===s3[i]){
                possibleIndex[j][0] = i1+1;
            } else if (i2<s2.length && s2[i2]===s3[i]){
                possibleIndex[j][1] = i2+1;
            } else {
                toBeDeleted[toBeDeleted.length] = j;
            }
        }
        //Remove invalid index pair from array
        for (let j=toBeDeleted.length-1;j>=0;j--){
            possibleIndex.splice(toBeDeleted[j],1);
        }

        if (possibleIndex.length===0) break;
    }
    return (possibleIndex.length>0);
};


var isInterleave = function(s1, s2, s3) {
    if (s1.length+s2.length!=s3.length) return false;
    let f=[];
    for (let i=0;i<=s1.length;i++) f[i] = [];
    f[0][0] = true;
    for (let i=0;i<=s1.length;i++){
        for (let j=0;j<=s2.length;j++){
            if (i===0 && j===0) continue;
            f[i][j] = (i>0 && !!f[i-1][j] && s1[i-1] === s3[i+j-1]) || (j>0 && !!f[i][j-1] && s2[j-1] === s3[i+j-1]);
            //f[i][j] = (!!f[i-1][j] && s1[i] === s3[i+j]) || (!!f[i][j-1] && s2[j] === s3[i+j]);
        }
    }
    return f[s1.length][s2.length];
};

isInterleave("a","ab","aba");
isInterleave("aabcc","dbbca","aadbbcbcac");
isInterleave("aabcc","dbbca","aadbbbaccc");

isInterleave("bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa",
    "babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab",
    "babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab")