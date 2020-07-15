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

/**
 *
 * @param str - any string with brackets
 * @returns {boolean} is the brackets make up the correct sequence
 * @constructor - ? // Артур, где тут конструктор? :D (автоматом документирует)
 */
function isCorrectBracketSequence(str) {
	if (!str.includes('(')) {
		return false;
	}
	for (const elem of str) {
		if (elem === ')' && stack.size === 0) {
			return false;
		}
		if (elem === '(') {
			stack.push(elem);
		} else if (elem === ')') {
			if (stack.pick() === '(') {
				stack.pop();
			}
		}
	}
	return stack.size === 0;
}

const str = prompt('Input your string with brackets');

alert(`Your brackets sequence is ${isCorrectBracketSequence(str) ? 'correct' : 'incorrect'}!`);