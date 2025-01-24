function callOnce(fn) {
  let isFnCalled = false;
  let result;

  return function (...args) {
    if (!isFnCalled) {
      isFnCalled = true;

      console.log(...args);

      result = fn(...args);
      return result;
    }

    return undefined;
  };
}

// const fn1 = (a, b, c) => a + b + c;
// const onceFn1 = callOnce(fn1);
// console.log(onceFn1(1, 2, 3));
// console.log(onceFn1(2, 3, 6));

const fn2 = (a, b, c) => a * b * c;
const onceFn2 = callOnce(fn2);

console.log(onceFn2(5, 7, 4));
console.log(onceFn2(2, 3, 6));
