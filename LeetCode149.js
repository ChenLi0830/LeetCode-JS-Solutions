/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints2 = function(points) {
    if (points.length<=2) return points.length;
    let ans = 0;
    
    for (let i=0;i<points.length;i++){
        for (let j=i+1;j<points.length;j++){
            let a = (points[i].y-points[j].y)/(points[i].x-points[j].x),
                b = points[i].y - a * points[i].x,
                c = (points[i].x-points[j].x) / (points[i].y-points[j].y),
                d = points[i].x - c*points[i].y;
            let count = 0;
            for (let k=0;k<points.length;k++){
                if (a*points[k].x+b===points[k].y || c*points[k].y+d===points[k].x ||
                    (points[k].x===points[i].x && points[k].y)===points[i].y) {count++}
            }
            if (count>ans) ans = count;
        }
    }
    return ans;
};

var maxPoints2 = function(points) {
    if (points.length<=2) return points.length;
    let ans = 0;
    
    for (let i=0;i<points.length;i++){
        let map = new Map();
        for (let j=i+1;j<points.length;j++){
            let y = points[j].y-points[i].y,
                x = points[j].x-points[i].x,
                gcd = getGcd(x,y);
            
            if (gcd!==0) {
                x /= gcd;
                y /= gcd;
            }
            if (!map.has(x)){
                let m = new Map();
                m.set(y, 1);
                map.add(x, m);
            }
            
            let count = map.get(x).get(y);
            map.get(x).set(y, ++count);
            if (count>ans) ans = count;
        }
    }
    return ans;
    
    function getGcd(x,y){
        if (y===0) return x;
        return getGcd(y, x%y);
    }
};

var maxPoints = function(points) {
    if (points.length<=2) return points.length;
    let ans = 0;
    
    for (let i=0;i<points.length;i++){
        let map = new Map(), overlap = 0, max = 0;
        for (let j=i+1;j<points.length;j++){
            let y = points[i].y-points[j].y, x = points[i].x-points[j].x;
            if (y===0 && x ===0) {
                overlap++;
                continue;
            }
            let a = x===0 ? Infinity : y/x;
            if (!map.has(a)) {
                map.set(a,1);
            }
            else map.set(a,map.get(a)+1);
            if (map.get(a)>max) max = map.get(a);
        }
        if (overlap+max+1>ans) ans = overlap+max+1;
    }
    return ans;
};

// let p1 = new Point(1,1),
//     p2 = new Point(3,6),
//     p3 = new Point(2,2),
//     p4 = new Point(4,8),
//     p5 = new Point(5,5),
//     p6 = new Point(7,2);

// maxPoints([p1,p2,p3,p4,p5,p6]);

// let p1 = new Point(0,0),
//     p2 = new Point(0,0),
//     p3 = new Point(0,0),
//     p4 = new Point(2,2),
//     p5 = new Point(1,1),
//     p6 = new Point(1,1),
//     p7 = new Point(2,2);
//
// maxPoints([p1,p2,p3,p4,p5,p6,p7]);

let p1 = new Point(4,0),
    p2 = new Point(4,-1),
    p3 = new Point(4,5);

// [[4,0],[4,-1],[4,5]]
maxPoints([p1,p2,p3]);