/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function Course(number){
    this.no = number;
    this.needsNo = 0;
    this.pres = [];
}

var findOrder = function(numCourses, prerequisites) {
    let courses = [], ans = [], set = new Set();
    for (let i=0;i<numCourses;i++){
        courses[i] = new Course(i);
    }
    for (let i=0;i<prerequisites.length;i++){
        let c = prerequisites[i][0], pre = prerequisites[i][1];
        courses[c].needsNo++;
        courses[pre].pres[courses[pre].pres.length] = c;
    }
    let aCourses = [], index = 0;
    for (let i=0;i<numCourses;i++) if (courses[i].needsNo === 0) aCourses[index++] = courses[i];
    while (index>0){
        let takeC = aCourses[--index];
        ans[ans.length] = takeC.no;
        set.add(takeC.no);
        for (let i=0;i<takeC.pres.length;i++){
            let c = takeC.pres[i];
            courses[c].needsNo--;
            if (courses[c].needsNo===0 && !set.has(c)) aCourses[index++] = courses[c];
        }
    }
    return ans.length===numCourses ? ans:[];
};
