function summ(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i += 1) {
    if (!Number.isNaN(args[i])) {
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
function summAdvanced() {
  // TODO: implement function
  // HINT: pseudo-array `arguments` should be used (https://learn.javascript.ru/arguments-pseudoarray)
}

// Expected result
// If function(getTen, getTenString, getRandomNumber) was passed it should be called
// and its return value should be added to final result
// => 1 + 2 + 10 + 10 + randow value, 'abc' should be ignored. Result should have type Number
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
