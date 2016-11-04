### Pacific Atlantic Water Flow
## Method 1. DFS+BFS
DFS: To determine the connection status of one unit cell, you need to first determine the connection status of the cells around it.  
BFS: When the connection status of one unit cell is determined, update the unit cells whose height is the same with it. The lower cells' status will not change because of the update of this cell, and the higher cells will not be visited in the first place.

## Things worth note:
1. Remember to check for boundary for matrix, namely, `if (x>=0 && x<n && y>=0 && y<m) ...`
2. Remember to deal with repeated visit, namely, [x,y] -> [x+1, y] -> [x, y] -> [x+1,y]

## Method 2. BFS - Flooding algorithm
Rather than check if an unit cell can reach both Atlantic and Pacific, use Atlantic cells to flood the entire matrix, and get a matrix of boolean that saves whether an unit cell will reach Atlantic. Do the same thing with Pacific ocean cells. Finally, the overlap of the two matrices is the answer. 