/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let sorted = nums.slice(0), counts = [];
    sorted = sorted.sort((a,b)=>{return a-b});
    nums.forEach((n)=>{
        let l = 0, r = sorted.length-1;
        while (true){
            let m = Math.trunc((l+r)/2);
            if (sorted[m]===n){
                while (sorted[m-1]===sorted[m]) m--;
                counts.push(m);
                sorted.splice(m,1);
                break;
            } else if (sorted[m]<n){
                l = m+1;
            } else {
                r = m-1;
            }
        }
    });
    return counts;
};

// countSmaller([5, 2, 6, 1]);
countSmaller([-1,-2]);
