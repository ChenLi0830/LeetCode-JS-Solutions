class RandomizedCollection {
    ArrayList arrayList;
    HashMap hashMap;
    /** Initialize your data structure here. */
    public RandomizedCollection() {
        this.arrayList = new ArrayList();
        this.hashMap = new HashMap();
    }

    /** Inserts a value to the collection. Returns true if the collection did not already contain the specified element. */
    public boolean insert(int val) {
        boolean ans = !this.hashMap.containsKey(val);
        HashSet set;

        if (ans){ // value hasn't been added
            set = new HashSet();
            this.hashMap.put(val, set);
        } else {
            set = (HashSet)this.hashMap.get(val);
        }

        this.arrayList.add(val);
        set.add(this.arrayList.size()-1);

        return ans;
    }

    /** Removes a value from the collection. Returns true if the collection contained the specified element. */
    public boolean remove(int val) {
        if (this.hashMap.containsKey(val)){
            HashSet set = (HashSet) this.hashMap.get(val);
            if (set.size()==0) return false;
            else { // The target value appears at least once
                Iterator iterator = set.iterator();
                int index = (Integer) iterator.next();
                int lastIndex = this.arrayList.size()-1;
                int last = (Integer) this.arrayList.get(lastIndex);

                // deal with set.size
                set.remove(index);
                this.arrayList.remove(index);
                if (lastIndex!=index){
                    this.arrayList.add(index, last);
                    this.arrayList.remove(lastIndex);
                    //Update the hashSet of the last element
                    HashSet lastSet = (HashSet)this.hashMap.get(last);
                    lastSet.remove(lastIndex);
                    lastSet.add(index);
                }
                return true;
            }
        } else {
            return false;
        }
    }

    /** Get a random element from the collection. */
    public int getRandom() {
        int index = (int) (Math.random()*this.arrayList.size());
        return (Integer)this.arrayList.get(index);
    }
}

