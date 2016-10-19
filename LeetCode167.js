/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = new Map();
    
    for (let i=0;i<numbers.length;i++){
        let n = numbers[i];
        if (!map.has(target-n)) {
            map.set(n,i);
            continue;
        }
        return [map.get(target-n)+1, i+1];
    }
};
