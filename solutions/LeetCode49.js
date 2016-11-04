/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sortedStrs = [], ans=[];
    for (let i=0;i<strs.length;i++){
        sortedStrs[i] = {index: i};
        sortedStrs[i].value = strs[i].split("");
        sortedStrs[i].value.sort((a, b)=>{return a.localeCompare(b)});
        sortedStrs[i].value = sortedStrs[i].value.join("");
    }

    sortedStrs.sort((a, b)=>{return a.value.localeCompare(b.value)});
    let index = 0;
    for (let i=0;i<sortedStrs.length;i++){
        ans[index] = [];
        ans[index] = ans[index].concat(strs[sortedStrs[i].index]);
        while (i<sortedStrs.length-1 && sortedStrs[i].value===sortedStrs[i+1].value){
            i++;
            ans[index] = ans[index].concat(strs[sortedStrs[i].index]);
        }
        index++;
    }

    return ans;
};

//groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
//groupAnagrams([""]);
groupAnagrams(["","b",""]);
