/* Task 1 */
function summ(...args) {
  if (args === undefined || args === null) return false;
  let sum = 0;

  args.forEach((el) => {
    if (!Number.isNaN(+el) && typeof el !== "boolean") {
      sum += +el;
    }
  });

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
  if (args === undefined || args === null) return false;
  let sum = 0;

  args.forEach((el) => {
    if (typeof el === "function" && +el()) {
      sum += +el();
    } else if (!Number.isNaN(+el) && typeof el !== "boolean") {
      sum += +el;
    }
  });

  return sum;
}

summAdvanced("abc", 1, "2", getTen, getTenString, getRandomNumber);

/* Task 3 */
function isValueExists(value) {
  if (value === undefined || value === null) {
    return false;
  }

  return true;
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
  if (funct1 === undefined || funct2 === undefined || funct1 === null || funct2 === null) {
    return false;
  } 

  return funct1(funct2());
}

function doubleValue(value) {
  return value * 2;
}

function getFour() {
  return 4;
}
callWithFunctionResult(doubleValue, getFour);

/* Task 5 */
function callWhileStringIsNotEmpty(string, func) {
  if (string === undefined || func === undefined || string === null || func === null) {
    return false;
  }

  if (typeof string !== "string") return null;

  if (string.length === 1) return func(string);

  func(string);
  return callWhileStringIsNotEmpty(string.slice(0, -1), func);
}

function consoleLog(value) {
  console.log(value);
}

callWhileStringIsNotEmpty("qwerty", consoleLog);

module.exports = {
  summ,
  summAdvanced,
  isValueExists,
  callWithFunctionResult,
  callWhileStringIsNotEmpty,
};
