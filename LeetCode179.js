/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b)=>{// a will be first if return < 0, and b will be first if return > 0
        let str1 = a.toString()+b.toString(), str2 = b.toString()+a.toString();
        for (let i=0;i<str1.length;i++){
            let n1 = parseInt(str1[i]), n2 = parseInt(str2[i]);
            if (n1!==n2) return n2-n1;
        }
        return 0;
    });
    if (nums[0]===0) return "0";
    
    let ans = "";
    for (let i=0;i<nums.length;i++) ans += nums[i];
    return ans;
};
