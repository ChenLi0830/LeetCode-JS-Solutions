function Queue(){
    this.queue = [];
}

Queue.prototype.add = function(val){
    this.queue.push(val);
};

Queue.prototype.remove = function(){
    return this.queue.shift();
};

Queue.prototype.peek = function(){
    return this.queue[0];
};

Queue.prototype.isEmpty = function(){
    return this.queue.length===0;
};

Queue.prototype.size = function(){
    return this.queue.length;
};

/**
 * @constructor
 */
var Stack = function() {
    this.queue = new Queue();
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.queue.add(x);
    let size = this.queue.size();
    for (let i=1;i<size;i++){
        this.queue.add(this.queue.remove());
    }
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.queue.remove();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.queue.peek();
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.queue.isEmpty();
};

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.top());
stack.push(3);
stack.push(4);
console.log(stack.top());
console.log(stack.pop());
stack.push(5);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.top());