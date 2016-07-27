/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP2 = function(dungeon) {
    let d = dungeon, fH = [], fA = [];
    // Initialization
    fH[-1] = []; fA[-1] = [];
    for (let i=0;i<d.length;i++){
        fA[i] = []; fH[i] = [];
        fA[i][-1] = [-Infinity,-Infinity];
        fH[i][-1] = [-Infinity,-Infinity];
    }
    for (let j=0;j<d[0].length;j++){
        fA[-1][j] = [-Infinity,-Infinity];
        fH[-1][j] = [-Infinity,-Infinity];
    }
    fA[0][-1] = [0,0];fH[0][-1] = [0,0];
    
    // DP Calculation
    for (let i=0;i<d.length;i++){
        for (let j=0;j<d[0].length;j++){
            //fH
            let value1 = Math.min(fH[i-1][j][0], fH[i-1][j][1]+d[i][j]);
            let value2 = Math.min(fH[i][j-1][0], fH[i][j-1][1]+d[i][j]);
            if (value1>value2) {
                fH[i][j] = [value1, fH[i-1][j][1] +d[i][j]];
            } else {
                fH[i][j] = [value2, fH[i][j-1][1] +d[i][j]];
            }
            //fA
            if (fA[i-1][j][1]>fA[i][j-1][1]){
                fA[i][j] = [fA[i-1][j][0], fA[i-1][j][1]+d[i][j]];
            } else {
                fA[i][j] = [fA[i][j-1][0], fA[i][j-1][1]+d[i][j]];
            }
            if (fA[i][j][1]<fA[i][j][0]) fA[i][j][0] = fA[i][j][1];
            //update fH from fA if fA is smaller
            if (fA[i][j][0]>fH[i][j][0]) fH[i][j][0]=fA[i][j][0];
        }
    }
    
    return -fH[d.length-1][d[0].length-1][0]+1;
};

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let d = dungeon, f = [];
    // Initialization
    f[-1] = [];
    for (let i=0;i<d.length;i++){
        f[i] = [];
        f[i][-1] = [];
    }
    for (let j=0;j<d[0].length;j++){
        f[-1][j] = [];
    }
    f[0][-1] = [[0,0]];
    
    // DP Calculation
    for (let i=0;i<d.length;i++){
        for (let j=0;j<d[0].length;j++){
            f[i][j] = [];
            let arr1 = [], arr2 = [], i1 = 0, i2 = 0;
            // Update the value of f[i-1][j] and f[i][j-1] when moving to i,j
            for (let k=0;k<f[i-1][j].length;k++){
                arr1[k] = [];
                arr1[k][1] = f[i-1][j][k][1]+d[i][j];
                arr1[k][0] = Math.min(f[i-1][j][k][0], arr1[k][1]);
            }
            arr1.sort((a,b)=>{return b[0]-a[0]});
            
            for (let k=0;k<f[i][j-1].length;k++){
                arr2[k] = [];
                arr2[k][1] = f[i][j-1][k][1]+d[i][j];
                arr2[k][0] = Math.min(f[i][j-1][k][0], arr2[k][1]);
            }
            arr2.sort((a,b)=>{return b[0]-a[0]});
            
            while (i1<arr1.length || i2<arr2.length){
                let aValue1 = i1 < arr1.length? arr1[i1][1] : -Infinity,
                    aValue2 = i2 < arr2.length? arr2[i2][1] : -Infinity,
                    hValue1 = i1 < arr1.length? arr1[i1][0] : -Infinity,
                    hValue2 = i2 < arr2.length? arr2[i2][0] : -Infinity;
                let a, h;
                if (hValue1>hValue2 || (hValue1===hValue2 && aValue1>aValue2)){
                    h = hValue1; a = aValue1; i1++;
                } else {
                    h = hValue2; a = aValue2; i2++;
                }
                if (f[i][j].length===0) f[i][j][0] = [h, a];
                else if (a>f[i][j][f[i][j].length-1][1]) f[i][j][f[i][j].length] = [h, a];
            }
        }
    }
    f[d.length-1][d[0].length-1].sort((a,b)=>{return b[0]-a[0]});
    return -f[d.length-1][d[0].length-1][0][0]+1;
};

// calculateMinimumHP([[-2,-3,-2,3],[-50,1,3,3],[50,50, 3, -100]]);
calculateMinimumHP([[100]]);