/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length>1){
        if (nums[nums.length-1]>nums[nums.length-2]){// ascending
            reverse(nums.length-2, nums.length-1);
        } else {// descending
            var i = nums.length-1, reset = false;
            while (nums[i-1]>=nums[i] && i>0){
                i--;
            }

            if (i===0 && nums[i]>nums[i+1]){
                reset = true;
            }

            reverse(i, nums.length-1);

            if (!reset){
                var minIndex = findNext(i, nums.length-1, nums[i-1]);
                //swap nums[i-1] with min
                var temp = nums[i-1];
                nums[i-1] = nums[minIndex];
                nums[minIndex] = temp;
            }
        }
    }

    function reverse(n1, n2){
        for (var i=n1;i<=(n2+n1)/2;i++){
            var temp = nums[i];
            nums[i] = nums[n2-i+n1];
            nums[n2-i+n1] = temp;
        }
    }

    function findNext(n1, n2, num){
        var minIndex, min = Math.pow(2,31)-1;
        for (var i=n1;i<=n2;i++){
            if (nums[i]<min && nums[i]>num){
                min = nums[i];
                minIndex = i;
            }
        }
        return minIndex;
    }
};

//nextPermutation([1,2,3]);// 1 3 2
//nextPermutation([3,2,1]);// 1 2 3
//nextPermutation([1,1,5]);// 1 5 1

//nextPermutation([1,2,5,3,4]);// 1 2 5 4 3
//nextPermutation([1,2,5,4,3]);// 1 2 5 4 3

//nextPermutation([1]);
//nextPermutation([1, 1]);
//nextPermutation([2, 3, 1]);