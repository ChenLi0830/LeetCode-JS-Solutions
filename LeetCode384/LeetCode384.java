public class Solution {
    int[] nums;
    int[] original;

    public Solution(int[] nums) {
        this.nums = nums.clone();
        this.original = nums.clone();
    }

    /** Resets the array to its original configuration and return it. */
    public int[] reset() {
        this.nums = this.original.clone();
        return this.nums;
    }

    /** Returns a random shuffling of the array. */
    public int[] shuffle() {
        int size = this.original.length;
        boolean[] visited = new boolean[this.nums.length];
        Arrays.fill(visited, false);

        for (int i=0;i<size;i++){
            int randomIndex = (int)(Math.random()*(size-i));
            int count = 0;
            for (int j=0;j<size;j++){
                if (!visited[j]) {
                    count++;
                    if (count == randomIndex+1) {
                        this.nums[i] = this.original[j];
                        visited[j] = true;
                        break;
                    }
                }
            }
        }

        return this.nums;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.reset();
 * int[] param_2 = obj.shuffle();
 */