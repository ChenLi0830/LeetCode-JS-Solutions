/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function Course(n){
    this.no = n;
    this.pres = [];
}

var canFinish = function(numCourses, prerequisites) {
    let nodes = [], coursePres = [], ans = true;
    for (let i=0;i<numCourses;i++){
        nodes[i] = new Course(i);
    }
    for (let i=0;i<prerequisites.length;i++){
        let n1 = prerequisites[i][0], n2 = prerequisites[i][1];
        nodes[n1].pres[nodes[n1].pres.length] = nodes[n2];
    }
    for (let i=0;i<numCourses;i++){
        coursePres[i] = true;
        checkCourse(i);
        coursePres[i] = false;
    }
    return ans;
    
    function checkCourse(index){
        if (!ans) return;
        for (let i=0; i<nodes[index].pres.length;i++){
            let c = nodes[index].pres[i].no;
            if (coursePres[c]) {
                ans = false;
                return;
            }
            coursePres[c] = true;
            checkCourse(c);
            coursePres[c] = false;
        }
    }
};

// canFinish(2, [[1,0]]);
// canFinish(3, [[1,2],[0,1]]);
canFinish(3, [[1,2],[0,1],[2,0]]);
