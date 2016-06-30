/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length===0) return -1;
    var ans = doSearch(0,nums.length-1);
    return ans;

    function doSearch(l,r){
        var m=Math.floor((l+r)/2);
        if (l===m){
            if (target===nums[l]) return l;
            if (target===nums[l+1]) return l+1;
            return -1;
        } else if (nums[l]>nums[m]){
            if (target>=nums[l]){
                return doSearch(l,m);
            } else if (target<nums[l] && target>nums[m]){
                return doSearch(m+1,r);
            } else if (target<nums[l] && target<=nums[m]){
                return doSearch(l,m);
            }
        } else if (nums[m]>nums[r]){
            if (target>nums[m]){
                return doSearch(m+1,r);
            } else if (target <= nums[m] && target >= nums[l]){
                return doSearch(l,m);
            } else if (target <= nums[m] && target < nums[l]){
                return doSearch(m+1,r);
            }
        } else {// regular binary search where nums[l]<nums[m]<nums[r]
            if (target<=nums[m]){
                return doSearch(l,m)
            } else {
                return doSearch(m+1,r);
            }
        }
    }
};

console.assert(search([4],4)===0);
console.assert(search([4,5],3)===-1);
console.assert(search([4,5,6,7,0,1,2,3],4)===0);
console.assert(search([4,5,6,7,0,1,2,3],5)===1);
console.assert(search([4,5,6,7,0,1,2,3],6)===2);
console.assert(search([4,5,6,7,0,1,2,3],7)===3);
console.assert(search([4,5,6,7,0,1,2,3],0)===4);
console.assert(search([4,5,6,7,0,1,2,3],1)===5);
console.assert(search([4,5,6,7,0,1,2,3],2)===6);
console.assert(search([4,5,6,7,0,1,2,3],3)===7);
console.assert(search([4,5,6,7,0,1,2,3],9)===-1);

console.assert(search([4,5,6,7,0,1,2],4)===0);
console.assert(search([4,5,6,7,0,1,2],5)===1);
console.assert(search([4,5,6,7,0,1,2],6)===2);
console.assert(search([4,5,6,7,0,1,2],7)===3);
console.assert(search([4,5,6,7,0,1,2],0)===4);
console.assert(search([4,5,6,7,0,1,2],1)===5);
console.assert(search([4,5,6,7,0,1,2],2)===6);