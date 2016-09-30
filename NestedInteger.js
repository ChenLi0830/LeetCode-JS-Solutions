// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
function NestedInteger() {
  this.int = null;
  this.isInt = false;
  this.list = [];
  
  // Return true if this NestedInteger holds a single integer, rather than a nested list.
  // @return {boolean}
  this.isInteger = function () {
    return this.isInt;
  };
  
  // Return the single integer that this NestedInteger holds, if it holds a single integer
  // Return null if this NestedInteger holds a nested list
  // @return {integer}
  this.getInteger = function () {
    return this.int;
  };
  
  // Set this NestedInteger to hold a single integer equal to value.
  // @return {void}
  this.setInteger = function (value) {
    this.int = value;
    this.isInt = true;
  };
  
  // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
  // @return {void}
  this.add = function (elem) {
    this.list.push(elem);
  };
  
  // Return the nested list that this NestedInteger holds, if it holds a nested list
  // Return null if this NestedInteger holds a single integer
  // @return {NestedInteger[]}
  this.getList = function () {
    return this.list;
  };
};
