public class MedianFinder {
    private PriorityQueue<Integer> small = new PriorityQueue(Collections.reverseOrder()),
                                    large = new PriorityQueue();

    // Adds a number into the data structure.
    public void addNum(int num) {
        large.offer(num);
        small.offer(large.poll());
        if (small.size()>large.size()){
            large.offer(small.poll());
        }
    }

    // Returns the median of current data stream
    public double findMedian() {
        if (small.size() == large.size()){
            return (small.peek()+large.peek())/2.0;
        } else {
            return large.peek();
        }
    }
};

// Your MedianFinder object will be instantiated and called as such:
// MedianFinder mf = new MedianFinder();
// mf.addNum(1);
// mf.findMedian();