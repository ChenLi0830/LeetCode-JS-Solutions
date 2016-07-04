/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    let intLength = 0, result = [];

    intervals.sort((a,b)=>{return a.end - b.end});
    for (let i=intervals.length-1;i>=1;i--){
        if (intervals[i].start<=intervals[i-1].end){
            intervals[i-1].start = Math.min(intervals[i-1].start, intervals[i].start);
            intervals[i-1].end = intervals[i].end;
            intervals[i] = null;
        }
    }
    for (let i=0;i<intervals.length;i++) {
        if (intervals[i]) {
            result[intLength] = intervals[i];
            intLength++;
        }
    }
    return result;
};

/*let interval1 = new Interval(1,3),
    interval2 = new Interval(2,6),
    interval3 = new Interval(8,10),
    interval4 = new Interval(15,18);*/

//let interval1 = new Interval(1,3),
//    interval2 = new Interval(4,6),
//    interval3 = new Interval(7,9),
//    interval4 = new Interval(6,30);

let interval1 = new Interval(1,3),
    interval2 = new Interval(2,5),
    interval3 = new Interval(1,15),
    interval4 = new Interval(1,20),
    interval5 = new Interval(7,60);

merge([interval2, interval1, interval4, interval5, interval3]);
