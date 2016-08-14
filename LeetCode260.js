/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = 0;
    nums.forEach((num)=>{xor^=num});
    xor &= ~(xor-1);
    
    let num1 = 0, num2 = 0;
    nums.forEach((num)=>{
        if ((num & xor)===0) num1 ^= (num)
        else num2 ^= (num);
    });
    
    return [num1, num2];
};

// singleNumber([1,2,1,3,2,5]);
singleNumber([-1139700704,-1653765433]);
