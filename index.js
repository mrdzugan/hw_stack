'use strict';

class Stack {
    constructor(maxSize = 1000) {
        this._size = 0;
        this._maxSize = maxSize;
    }

    get size() {
        return this._size;
    }

    push(v) {
        this[this._size++] = v;
        if (this.size > this._maxSize) {
            throw new RangeError('Stack overflow');
        }
        return this._size;
    }

    pop() {
        if (!this._size) {
            return;
        }
        const value = this[--this._size]
        delete this[this._size];
        return value;
    }

    pick() {
        return this[this._size - 1];
    }
}

let stack = new Stack();

const str = '()(()';

function Check(str) {
    for (const symb of str) {
        if (symb === ')' && stack.size === 0) {
            return false;
        }
        if (symb === '(') {
            stack.push(symb);
        } else if (symb === ')') {
            if (stack.pick() === '(') {
                stack.pop();
            }
        }
    }
    return stack.size === 0;
}

console.log(Check(str));