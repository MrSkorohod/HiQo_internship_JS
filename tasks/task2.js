/* Task 1 */
function chunk(arr, num) {
  if (!Array.isArray(arr) || typeof num !== "number") return [];

  const result = [];

  while (arr.length !== 0) {
    result.push(arr.splice(0, num));
  }

  return result;
}

/* Task 2 */
function difference(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];

  // return arr1.concat(arr2).reduce((acc, el) => {
  //   if (acc.includes(el)) {
  //     acc.splice(acc.indexOf(el), 1);
  //   } else {
  //     acc.push(el);
  //   }
  //   return acc;
  // }, []);

  return arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
}

/* Task 3 */
function findIndex(arr, searchParam) {
  if (
    arr === null
    || arr === undefined
    || searchParam === null
    || searchParam === undefined
  ) { return undefined; }

  if (
    !Array.isArray(arr)
    || (typeof searchParam !== "number"
      && typeof searchParam !== "string"
      && typeof searchParam !== "function")
  ) { return "Invalid arguments"; }

  if (typeof searchParam === "number" || typeof searchParam === "string") {
    return arr.indexOf(searchParam);
  }
  return arr.findIndex(searchParam);
}

/* Task 4 */
function flattenDeep(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  return arr.flat(Infinity);
}

/* Task 5 */
function fromPairs(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return {};

  for (let i = 0; i < arr.length; i += 1) {
    if (!Array.isArray(arr[i]) || arr[i].length !== 2) {
      return "Invalid argument";
    }
  }

  return Object.fromEntries(arr);
}

/* Task 6 */
function uniq(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  // return arr.reduce((acc, el) => {
  //   if (!acc.includes(el)) acc.push(el);
  //   return acc;
  // }, []);
  return Array.from(new Set(arr));
}

/* Task 7 */
function every(arr, func) {
  if (!Array.isArray(arr) || arr.length === 0 || typeof func !== "function") { return false; }

  return arr.every(func);
}

/* Task 8 */
function find(arr, func) {
  if (!Array.isArray(arr) || arr.length === 0 || typeof func !== "function") { return null; }

  return arr.find(func);
}

/* Task 9 */
function groupBy(arr, func) {
  if (!Array.isArray(arr) || arr.length === 0 || typeof func !== "function") { return {}; }

  return arr.reduce((acc, el) => {
    if (acc[func(el)]) {
      acc[func(el)].push(el);
    } else {
      acc[func(el)] = [el];
    }

    return acc;
  }, {});
}

/* Task 10 */
function isEqual(obj1, obj2) {
  if (
    obj1 === null
    || obj2 === null
    || obj1 === undefined
    || obj2 === undefined
  ) { return false; }

  const arrKeys = Object.keys(obj1);

  for (let i = 0; i < arrKeys.length; i += 1) {
    switch (typeof obj1[arrKeys[i]]) {
      case "object":
        if (!isEqual(obj1[arrKeys[i]], obj2[arrKeys[i]])) return false;
        break;
      default:
        if (obj1[arrKeys[i]] !== obj2[arrKeys[i]]) return false;
    }
  }

  return true;
}

module.exports = {
  chunk,
  difference,
  findIndex,
  flattenDeep,
  fromPairs,
  uniq,
  every,
  find,
  groupBy,
  isEqual,
};
