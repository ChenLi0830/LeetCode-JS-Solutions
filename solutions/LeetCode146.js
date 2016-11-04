/**
 * @constructor
 */
var LRUCache2 = function(capacity) {
    this.map = new Map();
    this.capacity = capacity;
    this.head = this.tail = null;
    this.count = 0;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache2.prototype.get = function(key) {
    if (this.map.has(key)) {
        let node = this.map.get(key).node;
        if (node.next && !node.next.next){
            let temp = node.next.val;
            node.next.val = node.val;
            node.val = temp;
            
            let value = this.map.get(node.val).value;
            this.map.set(node.val, {node:node, value: value});
            value = this.map.get(node.next.val).value;
            this.map.set(node.next.val, {node:node.next, value: value});
        } else if (node.next && node.next.next){
            let temp = node.next.val, newTail = new ListNode(key);
            node.next = node.next.next;
            node.val = temp;
            this.tail.next = newTail;
            this.tail = newTail;
    
            let value = this.map.get(node.val).value;
            this.map.set(node.val, {node:node, value: value});
            value = this.map.get(newTail.val).value;
            this.map.set(newTail.val, {node:newTail, value: value});
        }
        return this.map.get(key).value;
    }
    else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache2.prototype.set = function(key, value) {
    if (!this.map.has(key)){
        let node = new ListNode(key);
        if (this.count===this.capacity){
            this.map.delete(this.head.val);
            this.head = this.head.next;
            this.count--;
        }
        if (this.tail) this.tail.next = node;
        this.tail = node;
        if (!this.head) this.head = node;
        this.map.set(key, {node:node, value:value});
        this.count++;
    } else if (this.map.get(key).value!==value){
        let node = this.map.get(key).node;
        this.map.set(key, {node:node, value:value});
    
        if (node.next && !node.next.next){
            let temp = node.next.val;
            node.next.val = node.val;
            node.val = temp;
        
            let value = this.map.get(node.val).value;
            this.map.set(node.val, {node:node, value: value});
            value = this.map.get(node.next.val).value;
            this.map.set(node.next.val, {node:node.next, value: value});
        } else if (node.next && node.next.next){
            let temp = node.next.val, newTail = new ListNode(key);
            node.next = node.next.next;
            node.val = temp;
            this.tail.next = newTail;
            this.tail = newTail;
        
            let value = this.map.get(node.val).value;
            this.map.set(node.val, {node:node, value: value});
            value = this.map.get(newTail.val).value;
            this.map.set(newTail.val, {node:newTail, value: value});
        }
    }
};

var LRUCache = function(capacity) {
    this.map = new Map();
    this.capacity = capacity;
    this.head = new DoubleListNode(0,0);
    this.tail = new DoubleListNode(0,0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.count = 0;
    
    this.addNode = function (key, value){
        let node = new DoubleListNode(key, value);
        this.tail.prev.next = node;
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev = node;
        this.map.set(key, node);
    };
    
    this.deleteNode = function(key){
        let node = this.map.get(key);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.map.delete(key);
    };
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        let value = this.map.get(key).value;
        this.deleteNode(key);
        this.addNode(key, value);
        return value;
    }
    else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    if (!this.map.has(key)){
        this.addNode(key, value);
        if (this.count===this.capacity){
            this.deleteNode(this.head.next.key);
            this.count--;
        }
        this.count++;
    } else {
        this.deleteNode(key);
        this.addNode(key, value);
    }
};



let cache = new LRUCache(10);
cache.set(1,1);
console.assert(cache.get(1)===1);
cache.set(2,2);
cache.set(3,3);
cache.set(4,4);
cache.set(5,5);
cache.set(6,6);
cache.set(6,6);
console.assert(cache.get(6)===6);
console.assert(cache.get(1)===1);
cache.set(7,7);
cache.set(8,8);
cache.set(9,9);
cache.set(10,10);
cache.set(11,11);
console.assert(cache.get(1)===1);
console.assert(cache.get(11)===11);



// let cache = new LRUCache(2);
// cache.set(2,1);
// cache.set(1,1);
// cache.get(2);
// cache.set(4,1);
// cache.get(1);
// cache.get(2);

// let cache = new LRUCache(10);
//
// cache.set(10,13);cache.set(3,17);cache.set(6,11);cache.set(10,5);cache.set(9,10);cache.get(13);cache.set(2,19);cache.get(2);
// cache.get(3);cache.set(5,25);cache.get(8);cache.set(9,22);cache.set(5,5);cache.set(1,30);cache.get(11);cache.set(9,12);cache.get(7);
// cache.get(5);cache.get(8);cache.get(9);cache.set(4,30);cache.set(9,3);cache.get(9);cache.get(10);cache.get(10);cache.set(6,14);
// cache.set(3,1);cache.get(3);cache.set(10,11);cache.get(8);
// cache.set(2,14);cache.get(1);cache.get(5);cache.get(4);cache.set(11,4);
// cache.set(12,24);cache.set(5,18);cache.get(13);cache.set(7,23);cache.get(8);cache.get(12);cache.set(3,27);cache.set(2,12);
// cache.get(5);cache.set(2,9);cache.set(13,4);cache.set(8,18);cache.set(1,7);cache.get(6);cache.set(9,29);cache.set(8,21);cache.get(5);
// cache.set(6,30);cache.set(1,12);cache.get(10);cache.set(4,15);cache.set(7,22);cache.set(11,26);cache.set(8,17);cache.set(9,29);cache.get(5);
// cache.set(3,4);cache.set(11,30);cache.get(12);cache.set(4,29);cache.get(3);cache.get(9);cache.get(6);cache.set(3,4);cache.get(1);cache.get(10);
// cache.set(3,29);cache.set(10,28);cache.set(1,20);cache.set(11,13);cache.get(3);cache.set(3,12);cache.set(3,8);cache.set(10,9);cache.set(3,26);
// cache.get(8);cache.get(7);cache.get(5);cache.set(13,17);cache.set(2,27);cache.set(11,15);cache.get(12);cache.set(9,19);
// cache.set(2,15);cache.set(3,16);cache.get(1);cache.set(12,17);cache.set(9,1);cache.set(6,19);cache.get(4);cache.get(5);
// cache.get(5);cache.set(8,1);cache.set(11,7);cache.set(5,2);cache.set(9,28);cache.get(1);cache.set(2,2);cache.set(7,4);
// cache.set(4,22);cache.set(7,24);cache.set(9,26);cache.set(13,28);cache.set(11,26);

// let cache = new LRUCache(2);
// cache.set(2,1);
// cache.set(1,1);
// cache.set(2,3);
// cache.set(4,1);
// cache.get(1);
// cache.get(2);