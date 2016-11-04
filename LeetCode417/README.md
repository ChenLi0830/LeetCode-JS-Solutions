### Pacific Atlantic Water Flow
## DFS+BFS
DFS: To determine the connection status of one unit cell, you need to first determine the connection status of the cells around it.  
BFS: When the connection status of one unit cell is determined, update the unit cells whose height is the same with it. The lower cells' status will not change because of the update of this cell, and the higher cells will not be visited in the first place.

## Things worth note:
1. Remember to check for boundary for matrix, namely, `if (x>=0 && x<n && y>=0 && y<m) ...`
2. Remember to deal with repeated visit, namely, [x,y] -> [x+1, y] -> [x, y] -> [x+1,y]