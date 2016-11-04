/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let arr = [[]];
    for (let i=0;i<nums.length;i++){
        let tempArr = [], index = 0;
        for (let j=0;j<arr.length;j++){
            tempArr[index] = arr[j];
            tempArr[index+1] = arr[j].concat(nums[i]);
            index+=2;
        }
        arr = tempArr.slice(0);// try arr = tempArr;
    }
    return arr;
};