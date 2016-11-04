


// Java Iterator interface reference:
// https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html
class PeekingIterator implements Iterator<Integer> {
    private Integer buffer = null;
    private Iterator<Integer> iter;

	public PeekingIterator(Iterator<Integer> iterator) {
	    // initialize any member here.
	    iter = iterator;
	    if (iter.hasNext()) buffer = iter.next();
	    else buffer = null;
	}

    // Returns the next element in the iteration without advancing the iterator.
	public Integer peek() {
	    return buffer;
	}

	// hasNext() and next() should behave the same as in the Iterator interface.
	// Override them if needed.
	@Override
	public Integer next() {
	    Integer temp = buffer;
	    if (iter.hasNext()) {
	        buffer = iter.next();
	    } else
	        buffer = null;
        return temp;
	}

	@Override
	public boolean hasNext() {
	    return buffer!=null;
	}
}