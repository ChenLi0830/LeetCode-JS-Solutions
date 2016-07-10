/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea3 = function(heights) {
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


var largestRectangleArea2 = function(heights) {
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


var largestRectangleArea = function(heights) {
    let stack = [], sIndex = 0, maxArea = 0;
    heights[heights.length] = 0;
    for (let i=0;i<heights.length;i++){
        if (sIndex === 0 || heights[i]>heights[stack[sIndex-1]]){
            stack[sIndex++] = i;
        } else {
            let hIndex = stack[sIndex-1], height = heights[hIndex];
            sIndex--;
            let  width = sIndex>=1 ? i-stack[sIndex-1]-1 : i, area = height * width;
            maxArea = Math.max(maxArea, area);
            i--;
        }
    }
};
largestRectangleArea([4,5,6,4]);