/* Task 1 */
function summ(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i += 1) {
    if (!Number.isNaN(+args[i])) {
      sum += +args[i];
    }
  }
  return sum;
}

summ(1, "2", "3", 5, "abc");

/* Task 2 */
function getRandomNumber() {
  return Math.random();
}

function getTen() {
  return 10;
}

function getTenString() {
  return "10";
}

function summAdvanced(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] === "function") {
      sum += +args[i]();
    } else if (!Number.isNaN(+args[i])) {
      sum += +args[i];
    }
  }
  return sum;
}

summAdvanced("abc", 1, "2", getTen, getTenString, getRandomNumber);

/* Task 3 */
function isValueExists(value) {
  // TODO: implement function
}

// Expected result
isValueExists(1); // => true
isValueExists(0); // => true
isValueExists("12"); // => true
isValueExists(""); // => true
isValueExists(false); // => true
isValueExists(undefined); // => false
isValueExists(null); // => false

/* Task 4 */
function callWithFunctionResult(funct1, funct2) {
  // TODO: implement function
}

// Expected result
// => doubleValue was called with value returned by getFour, => 2 * 4 = 8
function doubleValue(value) {
  return value * 2;
}

function getFour() {
  return 4;
}
callWithFunctionResult(doubleValue, getFour);

/* Task 5 */
function callWhileStringIsNotEmpty(string, func) {
  // TODO: implement function, recursion should be used
}

// Expected result
function consoleLog(value) {
  console.log(value);
}

callWhileStringIsNotEmpty("qwerty", consoleLog);
/* Result:
    qwerty
    qwert
    qwer
    qwe
    qw
    q
  */
