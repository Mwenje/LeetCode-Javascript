let filter = function (arr, fn) {
  const filterResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filterResult.push(arr[i]);
    }
  }

  return filterResult;
};

arr = [0, 10, 20, 30];
arr1 = [-2, -1, 0, 1, 2];

let fn1 = function greaterThan10(n) {
  return n > 10;
};

let fn2 = function firstIndex(n, i) {
  return i === 0;
};

let fn3 = function plusOne(n) {
  return n + 1;
};

console.log(filter(arr1, fn3));
