var MinStack = function() {
    this.a = [];
    this.b = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.a.push(val);
    if (this.b.length === 0 || this.b[this.b.length - 1] >= val) {
        this.b.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.a[this.a.length - 1] === this.b[this.b.length - 1]) {
        this.b.pop();
    }
    this.a.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.a[this.a.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.b[this.b.length - 1];
};

/** 
 * 155 leetcode Medium. Min Stack
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */