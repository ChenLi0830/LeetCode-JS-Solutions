public class Solution {
    public class Cell {
        int x;
        int y;
        int h;
        public Cell(int x, int y, int h){
            this.x = x;
            this.y = y;
            this.h = h;
        }
    }

    public int trapRainWater(int[][] heightMap) {
        if (heightMap.length==0) return 0;

        PriorityQueue<Cell> queue = new PriorityQueue<Cell>(1, new Comparator<Cell>(){
            public int compare(Cell a, Cell b){
                return a.h-b.h;
            }
        });

        int m = heightMap.length;
        int n = heightMap[0].length;
        boolean[][] visited = new boolean[m][n];

        for (int i=0;i<m;i++){
            visited[i][0] = true;
            visited[i][n-1] = true;
            queue.offer(new Cell(i, 0, heightMap[i][0]));
            queue.offer(new Cell(i, n-1, heightMap[i][n-1]));
        }
        for (int i=0;i<n;i++){
            visited[0][i] = true;
            visited[m-1][i] = true;
            queue.offer(new Cell(0, i, heightMap[0][i]));
            queue.offer(new Cell(m-1, i, heightMap[m-1][i]));
        }

        int[] xs = {-1, 1, 0, 0};
        int[] ys = {0, 0, -1, 1};
        int ans = 0;

        while(!queue.isEmpty()){
            Cell cell = queue.poll();
            for (int i = 0; i<4; i++){
                int nx = cell.x + xs[i];
                int ny = cell.y + ys[i];
                if (nx>=0 && nx<m && ny>=0 && ny<n && !visited[nx][ny]){
                    visited[nx][ny] = true;
                    ans += Math.max(0, cell.h - heightMap[nx][ny]);
                    queue.offer(new Cell(nx, ny, Math.max(heightMap[nx][ny], cell.h)));
                }
            }
        }

        return ans;
    }
}
