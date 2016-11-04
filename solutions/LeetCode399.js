/**
 * Created by Chen on 2016-09-18.
 */
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

var calcEquation = function(equations, values, queries) {
  let vPair = [],
      unvisited = new Set(),
      allNodes = [],
      ans = new Array(queries.length).fill(-1);
  
  equations.forEach((e,i) => {
    if (!vPair[e[0]]) vPair[e[0]] = [];
    vPair[e[0]][e[1]] = values[i];
    unvisited.add(e[0]);
    unvisited.add(e[1]);
  });
  
  //Initialize 'allNodes'
  unvisited.forEach(v => allNodes.push(v));
  
  allNodes.forEach( v => {
    if (!unvisited.has(v)) return;
    let que = [v],
        map = new Map();
    
    map.set(v, 1);
    unvisited.delete(v);
    
    while (que.length>0) {
      let cur = que.shift();
      allNodes.forEach( n => {
        let case1 = vPair[cur] && vPair[cur][n] !== undefined,
            case2 = vPair[n] && vPair[n][cur] !== undefined;
        
        if ((case1 || case2) && (!map.has(n) || !map.has(cur))){
          let value = case1 ? vPair[cur][n] : vPair[n][cur];
          case1 && map.set(n, map.get(cur) / value);
          case2 && map.set(n, value * map.get(cur));
          que.push(n);
          unvisited.delete(n);
        }
      })
    }
    
    queries.forEach((q,i) => {
      if (map.has(q[0]) && map.has(q[1])){
        ans[i] = map.get(q[0]) / map.get(q[1]);
      }
    })
  });
  
  return ans;
};


// calcEquation([ ["a","b"],["b","c"] ], [2.0,3.0], [ ["a","c"],["b","c"],["a","e"],["a","a"],["x","x"] ]);
// calcEquation([ ["a","b"],["b","c"] ], [2.0,3.0], [ ["a","c"],["b","a"],["a","e"],["a","a"],["x","x"] ]);
// calcEquation([ ["a","b"],["b","c"], ["c", "d"], ["d", "e"], ["a", "x"] ], [2.0,3.0, 4, 1, 0.1], [ ["a","c"],["b","a"],["a","e"],["a","a"],["e","x"] ]);
calcEquation([ ["a","z"],["b","z"], ["c", "x"], ["d", "x"] ], [2.0,3.0, 4, 1], [["z","c"], ["x", "c"], ["a", "x"]]);