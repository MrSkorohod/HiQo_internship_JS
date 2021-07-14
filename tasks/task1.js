/* Task 1 */
function summ() {
  // TODO: implement function
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (!isNaN(arguments[i])) {
      sum += +arguments[i];
    }
  }
  return sum;
  // HINT: pseudo-array `arguments` should be used (https://learn.javascript.ru/arguments-pseudoarray)
}

// Expected result
summ(1, "2", "3", 5, "abc"); // => Number 11, 'abc' was ignored

/* Task 2 */
function summAdvanced() {
  // TODO: implement function
  // HINT: pseudo-array `arguments` should be used (https://learn.javascript.ru/arguments-pseudoarray)
}

// Expected result
// If function(getTen, getTenString, getRandomNumber) was passed it should be called and its return value should be added to final result
summAdvanced("abc", 1, "2", getTen, getTenString, getRandomNumber); // => 1 + 2 + 10 + 10 + randow value, 'abc' should be ignored. Result should have type Number

function getRandomNumber() {
  return Math.random();
}

function getTen() {
  return 10;
}

function getTenString() {
  return "10";
}

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
callWithFunctionResult(doubleValue, getFour); // => doubleValue was called with value returned by getFour, => 2 * 4 = 8
function doubleValue(value) {
  return value * 2;
}

function getFour() {
  return 4;
}

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
