let map = function (arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
};

let arr = [1, 2, 3];

let fn1 = function plusone(n) {
  return n + 1;
};

let fn2 = function plusI(n, i) {
  return n + i;
};

let fn3 = function constant() {
  return 42;
};

console.log(map(arr, fn3));
