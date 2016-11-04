/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup2 = function(nums) {
    let ans = [], solution = [], sIndex = 0, aIndex = 1;
    ans[0] = [];
    nums = nums.sort((a,b)=>{return a-b});
    doSearch(0);
    return ans;

    function doSearch(i0){
        for (let i=i0;i<nums.length;i++){
            while (i!==i0 && i<nums.length && nums[i]===nums[i-1]) i++;
            if (i>=nums.length) break;
            //Doesn't take nums[i]
            doSearch(i+1);

            //Take nums[i]
            solution[sIndex++] = nums[i];
            let sCopy = solution.slice(0, sIndex);
            //Check if solution's been added
            let added = false;
            for (let k=0;k<ans.length;k++){
                if (!added && ans[k].length===sCopy.length){
                    added = true;
                    for (let l = 0;l<ans[k].length;l++){
                        if (ans[k][l]!==sCopy[l]){
                            added = false;
                            break;
                        }
                    }
                }
            }
            if (!added)
                ans[aIndex++] = sCopy;

            doSearch(i+1);
            sIndex--;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let ans = [], prevSize;
    ans[0] = [];
    nums = nums.sort((a,b)=>{return a-b});
    for (let i=0;i<nums.length;i++){
        let startIndex = ((i===0 || nums[i] !== nums[i-1])? 0 : prevSize);
        prevSize = ans.length;
        for (let j=startIndex;j<prevSize;j++){
            let temp = ans[j];
            temp = temp.concat(nums[i]);
            ans[ans.length] = temp;
        }
    }
    return ans;
};



//subsetsWithDup([1]);
//subsetsWithDup([1,2,2]);
//subsetsWithDup([2,2,2,2,2]);
//subsetsWithDup([4,4,4,1,4]);
subsetsWithDup([1,2,3,4,5,6,7,8,10,0]);
