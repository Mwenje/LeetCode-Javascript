// function memoize(fn) {
//   const cache = {}; //store our cached results.
//   let callCount = 0; //track how many times the original function was actually called.

//   function memoized(...args) {
//     const key = JSON.stringify(args);

//     if (!(key in cache)) {
//       callCount++; // Increment the call count
//       const result = fn(...args); // Call the original function with the arguments.
//       cache[key] = result; // Cache the result using the arguments as the key.

//       return result;
//     }

//     return cache[key]; //If we have a cached result return
//   }

//   memoized.getCallCount = () => callCount;

//   return memoized;
// }

// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);

// const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
// const memoizedFactorial = memoize(factorial);
// // Fibonacci function
// const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
// const memoizedFib = memoize(fib);

// // Example 1: sum function
// const actions1 = ["call", "call", "getCallCount", "call", "getCallCount"];
// const values1 = [[2, 2], [2, 2], [], [1, 2], []];

// let result1 = [];
// for (let i = 0; i < actions1.length; i++) {
//   const action = actions1[i];
//   const value = values1[i];

//   if (action === "call") {
//     result1.push(memoizedSum(...value));
//   } else if (action === "getCallCount") {
//     result1.push(memoizedSum.getCallCount());
//   }
// }

// console.log(result1);

// // Example 2: factorial function
// const actions2 = [
//   "call",
//   "call",
//   "call",
//   "getCallCount",
//   "call",
//   "getCallCount",
// ];
// const values2 = [[2], [3], [2], [], [3], []];

// let result2 = [];
// for (let i = 0; i < actions2.length; i++) {
//   const action = actions2[i];
//   const value = values2[i];

//   if (action === "call") {
//     result2.push(memoizedFactorial(...value));
//   } else if (action === "getCallCount") {
//     result2.push(memoizedFactorial.getCallCount());
//   }
// }

// console.log(result2); // [2, 6, 2, 2, 6, 2]

// // Example 3: fibonacci function
// const actions3 = ["call", "getCallCount"];
// const values3 = [[5], []];

// let result3 = [];
// for (let i = 0; i < actions3.length; i++) {
//   const action = actions3[i];
//   const value = values3[i];

//   if (action === "call") {
//     result3.push(memoizedFib(...value));
//   } else if (action === "getCallCount") {
//     result3.push(memoizedFib.getCallCount());
//   }
// }

// console.log(result3); // [8, 1]

function memoize(fn) {
  const cache = {};
  let callCount = 0;

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log(
        `Result: ${cache[key]}, Cached Result (Call Count: ${callCount})`
      );
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    callCount++;

    console.log(`Result: ${result}, Actual Call (Call Count: ${callCount})`);
    return result;
  };
}

const sum = (a, b) => a + b;

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const memoizedSum = memoize(sum);
const memoizedFactorial = memoize(factorial);

// console.log(memoizedSum(2, 3)); // First time, calls the function
// console.log(memoizedSum(2, 3)); // Cached result
// console.log(memoizedSum(3, 4)); // Calls the function again
// console.log(memoizedSum(2, 3)); // Cached result
// console.log(memoizedSum(1, 2)); // Calls the function again

console.log(memoizedFactorial(5)); // First time, calls the function
console.log(memoizedFactorial(6)); // Cached result
console.log(memoizedFactorial(5)); // Calls the function again
console.log(memoizedFactorial(10)); // Cached result
console.log(memoizedFactorial(5)); // Calls the function again
