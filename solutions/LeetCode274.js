/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex2 = function(citations) {
    citations.sort((a,b)=>{return b-a});
    for (let i=0;i<citations.length;i++){
        if (citations[i]<(i+1)){
            return i;
        }
    }
    return citations.length;
};

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let hCount = [];
    citations.forEach((h)=>{
        h = Math.min(h, citations.length);
        hCount[h] === undefined? hCount[h] = 1 : hCount[h]++;
    });
    let count = 0;
    for (let i=citations.length;i>=0;i--){
        count += (hCount[i] !== undefined? hCount[i] : 0);
        if (count>=i){
            return i;
        }
    }
};

hIndex([7,6,7,8,9]);