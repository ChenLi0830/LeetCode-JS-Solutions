/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea2 = function(heights) {
    let max = 0, f=[];
    f[-1] = [];
    for (let i=0;i<heights.length;i++){
        f[i] = [];
        for (let j=1;j<=heights[i];j++){
            f[i][j] = (f[i-1][j]?f[i-1][j]:0) + j;
            if (f[i][j]>max){
                max = f[i][j]
            }
        }
    }
    return max;
};


var largestRectangleArea = function(heights) {
    let leftRange = [], rightRange = [], max = 0;
    leftRange[0] = 0; rightRange[heights.length-1] = heights.length-1;
    for (let i=0;i<heights.length;i++){
        for (let j=i-1;j>=0;j--){
            if (heights[i]>heights[j]) {
                leftRange[i] = j+1;
                break;
            } else {
                leftRange[i] = leftRange[j];
                j = leftRange[j];
            }
        }
    }

    for (let i=heights.length-1;i>=0;i--){
        for (let j=i+1;j<heights.length;j++){
            if (heights[i]>heights[j]) {
                rightRange[i] = j-1;
                break;
            } else {
                rightRange[i] = rightRange[j];
                j = rightRange[j];
            }
        }
    }

    for (let i=0;i<heights.length;i++){
        let area = (rightRange[i]-leftRange[i]+1)*heights[i];
        if (area > max) max = area;
    }
    return max;
};

largestRectangleArea([2,1,5,6,2,3]);