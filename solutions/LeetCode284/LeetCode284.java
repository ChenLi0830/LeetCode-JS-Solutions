// Java Iterator interface reference:
// https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html
class PeekingIterator implements Iterator<Integer> {
    private Iterator<Integer> iter;
    private Integer buffer = null;

	public PeekingIterator(Iterator<Integer> iterator) {
	    // initialize any member here.
	    buffer = null;
	    iter = iterator;
	}

    // Returns the next element in the iteration without advancing the iterator.
	public Integer peek() {
        if (buffer == null && iter.hasNext()) buffer = iter.next();
        return buffer;
	}

	// hasNext() and next() should behave the same as in the Iterator interface.
	// Override them if needed.
	@Override
	public Integer next() {
	    if (buffer != null){
	        int tmp = buffer;
	        buffer = null;
	        return tmp;
	    } else return iter.next();
	}

	@Override
	public boolean hasNext() {
	    if (buffer != null) return true;
	    else return iter.hasNext();
	}
}