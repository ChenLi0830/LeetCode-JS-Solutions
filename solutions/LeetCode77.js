/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [], set = [], solution=[];
    searchNext(0,1);
    return ans;

    function searchNext(l,i0){
        if (l===k){
            ans = ans.concat([solution.slice(0)]);
            return;
        }

        for (let i=i0;i<=n;i++){
            if (!set[i]){
                set[i] = true;
                solution[l] = i;
                searchNext(l+1, i+1);
                set[i] = false;
            }
        }
    }
};

combine(4,2);
combine(4,5);