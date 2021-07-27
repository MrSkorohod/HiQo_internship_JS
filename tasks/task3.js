/* Task 1 */
function rememberResult(initialValue) {
  let count = initialValue;
  return function (func) {
    count = func(count);
    return count;
  };
}

// Expected result
function doubleValue(value) {
  return 2 * value;
}

const callWithRememberedResult = rememberResult(2);
callWithRememberedResult(doubleValue); // => 4
callWithRememberedResult(doubleValue); // => 8
callWithRememberedResult(doubleValue); // => 16

/* Task 2 */
function callMaxTimes(numberOfTimes, func) {
  let count = 0;

  return function () {
    if (count < numberOfTimes) {
      count += 1;
      return func();
    }
    return undefined;
  };
}

// Expected result
function consoleLog() {
  console.log("abc");
}

const callConsoleLog = callMaxTimes(3, consoleLog);
callConsoleLog(); // => 'abc'
callConsoleLog(); // => 'abc'
callConsoleLog(); // => 'abc'
callConsoleLog(); // => nothing happens

/* Task 3 */
function partial(func, ...argsBound) {
  return function (...args) {
    return func.call(this, ...argsBound, ...args);
  };
}

// Expected result
function greet(greeting, name) {
  return `${greeting} ${name}`;
}

const sayHelloTo = partial(greet, "Hello");
sayHelloTo("everyone"); // => 'Hello everyone'

/* Task 4 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

// Expected result
function summ1(a, b, c) {
  return a + b + c;
}

const curriedSumm1 = curry(summ1);
curriedSumm1(1)(2)(3); // => 6

function summ2(a, b, c, d, e) {
  return a + b + c + d + e;
}
const curriedSumm2 = curry(summ2);
curriedSumm2(1)(2)(3)(4)(5); // => 15

/* Task 5 */
function debounce(fn, timeOut) {
  // TODO: implement function body
  // HINT: setTimeout and clearTimeout should be used.
  if (this.timerId) {
    clearInterval(this.timerId);
  }
  this.timerId = setTimeout(() => fn(), timeOut);
  return this.timerId;
}

// Expected result
function dateNow() {
  console.log(Date.now());
}

// First case
debounce(dateNow, 1000); // => would be called in 1 second

// ...

// Second case
debounce(dateNow, 100); // => canceled
debounce(dateNow, 150); // => canceled
debounce(dateNow, 170); // => would be called only last, previous would be canceled

/* Task 6 */
function memoize(fn) {
  // TODO: implement function body
  const cache = new Map();

  return function (...args) {
    const key = [].join.call(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  };
}

module.exports = {
  rememberResult,
  callMaxTimes,
  partial,
  curry,
  debounce,
  memoize,
};
