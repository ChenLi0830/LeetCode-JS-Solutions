public class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        class Element implements Comparable<Element>{
            int x;
            int y;
            int val;

            public Element(int x, int y, int val){
                this.x = x;
                this.y = y;
                this.val = val;
            }


            @Override
            public int compareTo(Element that) {
                return this.val - that.val;
            }
        }

        PriorityQueue<Element> queue = new PriorityQueue<Element>();
        int n = matrix[0].length;

        for (int i=0; i<n; i++) {
            Element e = new Element(0, i, matrix[0][i]);
            queue.add(e);
        }

        for (int i=0; i<k-1; i++){
            Element elem = queue.poll();
            if (elem.x+1<n) {
                Element nextE = new Element(elem.x+1, elem.y, matrix[elem.x+1][elem.y]);
                queue.add(nextE);
            }
        }

        Element ansE = queue.poll();
        return ansE.val;
    }
}