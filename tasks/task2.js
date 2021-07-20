/* Task 1 */
function chunk(arr, num) {
    if (!Array.isArray(arr) || typeof num !== "number") return [];

    let result = [];
    do {
        if (arr.length === 0) break;
        result.push(arr.splice(0,num));
    } while (arr.length !== 0);
    return result;

}

// Expected result
chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]



/* Task 2 */
function difference(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];

    return arr1
              .filter(x => !arr2.includes(x))
              .concat(arr2.filter(x => !arr1.includes(x)));
}

// Expected result
difference([2, 1], [2, 3, 4]); // => [1, 3, 4]



/* Task 3 */
function findIndex() {
	// TODO: implement function
}

// Expected result
const numbers = [3, 5, 1, 6, 7];
findIndex(numbers, 1); // => 2

const users = [
  { name: 'User1' },
  { name: 'User2' },
  { name: 'User3' },
];
findIndex(users, (user) => user.name === 'User2'); // => 1



/* Task 4 */
function flattenDeep(...args) {
	if (args === null || args === undefined) return false;
    return args.flat(Infinity); 
}

// Expected result
flattenDeep([1, [2, [3, [4]], 5]]); // => [1, 2, 3, 4, 5]



/* Task 5 */
function fromPairs() {
	// TODO: implement function
}

// Expected result
fromPairs([['a', 1], ['b', 2]]); // => { 'a': 1, 'b': 2 }



/* Task 6 */
function uniq() {
	// TODO: implement function
}

// Expected result
uniq([2, 1, 2, 5, 6, 5, 7]); // => [2, 1, 5, 6, 7]

/* Task 7 */
function every() {
	// TODO: implement function
}

// Expected result
const users = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 23 },
];
every(users, (user) => user.age === 22); // => false

const users = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 22 },
];
every(users, (user) => user.age === 22); // => true

const users = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 23 },
  { name: 'User3', age: 20 },
];
every(users, (user) => user.age < 24); // => true



/* Task 8 */
function find() {
	// TODO: implement function
}

// Expected result
const users = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 23 },
  { name: 'User3', age: 20 },
];
find(users, (user) => user.age < 23); // => [{ name: 'User1', age: 22 }, { name: 'User3', age: 20 }]



/* Task 9 */
function groupBy() {
	// TODO: implement function
}

// Expected result
groupBy(['one', 'two', 'three'], (element) => element.length); // => { '3': ['one', 'two'], '5': ['three'] }



/* Task 10 */
function isEqual() {
	// TODO: implement function
}

// Expected result
const object1 = {
	a: 1,
	b: {
		c: 3,
		d: {
			e: 5,
		}
	}
};
const object2 = {
	a: 1,
	b: {
		c: 3,
		d: {
			e: 5,
		}
	}
};
isEqual(object1, object2); // => true

const object1 = {
	a: 1,
	b: {
		c: 2,
		d: {
			e: 5,
		}
	}
};
const object2 = {
	a: 1,
	b: {
		c: 3,
		d: {
			e: 5,
		}
	}
};
isEqual(object1, object2); // => false

const object1 = {
	a: 1,
	b: {
		c: 3,
		d: {
			e: 5,
		}
	}
};
const object2 = {
	a: 1,
	b: {
		c: 3,
		d: {
			e: 6,
		}
	}
};
isEqual(object1, object2); // => false

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
