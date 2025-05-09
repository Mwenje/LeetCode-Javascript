/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

const arr1 = [5, 4, 1, 2, 3];
const fn1 = (x) => x;

const arr2 = [{ x: 1 }, { x: 0 }, { x: -1 }];
const fn2 = (d) => d.x;

const arr3 = [
  [3, 4],
  [5, 2],
  [10, 1],
];
const fn3 = (x) => x[1];

console.log(sortBy(arr3, fn3));
