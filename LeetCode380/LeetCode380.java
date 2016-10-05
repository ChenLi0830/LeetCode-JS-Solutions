class RandomizedSet {
    int size;
    HashMap map;
    ArrayList array;

    /**
     * Initialize your data structure here.
     */
    public RandomizedSet() {
        this.map = new HashMap();
        this.array = new ArrayList();
        this.size = 0;
    }

    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element.
     */
    public boolean insert(int val) {
        if (!this.map.containsKey(val)) {
            this.array.add(val);
            this.map.put(val, this.size);
            this.size++;
            return true;
        } else return false;
    }

    /**
     * Removes a value from the set. Returns true if the set contained the specified element.
     */
    public boolean remove(int val) {
        if (this.map.containsKey(val)) {
            int index = (Integer) this.map.get(val);
            int last = (Integer) this.array.get(this.size - 1);
            int lastIndex = (Integer) this.map.get(last);
            this.size--;
            this.map.remove(val);

            if (last != val) {
                this.array.remove(lastIndex);
                this.array.remove(index);
                this.array.add(index, last);
                this.map.put(last, index);
            } else {
                this.array.remove(index);
            }
            return true;
        } else return false;
    }

    /**
     * Get a random element from the set.
     */
    public int getRandom() {
        int index = (int) (Math.random() * size);
        return (Integer) this.array.get(index);
    }
}

