/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let l=0, r = nums.length-1;
    while (l<=r){
        let m = Math.floor((l+r)/2);
        if (nums[m] === target) return true;
        else if (nums[l]<nums[m]){//Left half is sorted
            if (nums[l]<=target && target<nums[m]) r = m-1;
            else l = m+1;
        } else if (nums[l]>nums[m]){//Right half is sorted
            if (nums[m]<target && target<=nums[r]) l = m+1;
            else r = m-1;
        } else {//nums[l]===nums[m]
            l++;
        }
    }
    return false;
};

console.assert(search([1,2,1,1,1,1,1], 0)===false);
console.assert(search([1,2,1,1,1,1,1], 4)===false);
console.assert(search([1,2,1,1,1,1,1], 1)===true);
console.assert(search([1,2,1,1,1,1,1], 2)===true);
console.assert(search([2,2,2,2,2,2,1], 2)===true);
console.assert(search([2,2,2,2,2,2,1], 1)===true);
console.assert(search([2,2,2,2,2,2,1], 6)===false);
console.assert(search([2,2,2,2,2,2,1], 0)===false);
//while (l<=r)
//n[m]<T, n[r]>T r = m-1;
//n[m]>T, n[r]<=T r = m-1;
//n[m]<T n[R] >=T l = m+1;
//n[m]>T n[l]>T l=m+1;