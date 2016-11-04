/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let count = 0, start = gas.length-1, end = start, curGas = 0;
    while (count<gas.length){
        if (curGas+gas[end]-cost[end]>=0){
            curGas += gas[end]-cost[end];
            end = end===gas.length-1 ? 0: end+1;
            count++;
        } else {
            if (start===0) return -1;
            start--;
            curGas += gas[start]-cost[start];
            count++;
        }
    }
    return curGas>=0 ? start : -1;
};
