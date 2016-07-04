/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function (intervals, newInterval) {
    let result = [], resultI = 0, mergedInt = new Interval(0, 0);
    if (intervals.length===0) return [newInterval];

    for (let i = 0; i < intervals.length; i++) {
        if ((intervals[i].start <= newInterval.start && newInterval.start <= intervals[i].end) ||
            ((i === 0 || intervals[i-1].end < newInterval.start) && newInterval.start <= intervals[i].start && newInterval.end >= intervals[i].start)) {// Found left interval, needs to merge
            mergedInt.start = Math.min(intervals[i].start, newInterval.start);
            mergedInt.end = Math.max(intervals[i].end, newInterval.end);
            while (i < intervals.length && newInterval.end >= intervals[i].start) {
                mergedInt.end = Math.max(mergedInt.end, intervals[i].end);
                i++;
            }
            result[resultI] = mergedInt;
            resultI++;
            i--;
        } else if ((i === 0 || intervals[i-1].end < newInterval.start) && newInterval.start <= intervals[i].start && newInterval.end<intervals[i].start){// newInterval < than interval[i] and can not be merged
            result[resultI] = newInterval; result[resultI+1] = intervals[i];
            resultI+=2;
        }
        else {
            result[resultI] = intervals[i];
            resultI++;
        }
    }

    if (newInterval.start > intervals[intervals.length-1].end) {// newInterval too large
        result[resultI] = newInterval;
    }

    return result;
};

let interval1 = new Interval(1,3),
    interval2 = new Interval(8,9),
    interval3 = new Interval(10,15),
    interval4 = new Interval(1,20),
    interval5 = new Interval(7,60),
    newInterval = new Interval(9,9);

insert([interval1, interval2, interval3], newInterval);

//mergedInt  = [0,0]
//result = [[3,4], [6,7]]

// [1,3],[4,9],   [2,5] *
// [3,4],[6,9],   [2,5] *
// [3,4]   [2,5] *
// [3,4]   [6,7] *
// [3,4] [1,2]
// [] [1,2]
// [1,3], [8,9],    [5,7];