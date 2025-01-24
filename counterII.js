let createCounter = function (init) {
  let currentCount = init;
  console.log(currentCount);

  return {
    increment: () => {
      currentCount += 1;
      return currentCount;
    },
    decrement: () => {
      currentCount -= 1;
      return currentCount;
    },
    reset: () => {
      currentCount = init;
      return currentCount;
    },
  };
};

const counter = createCounter(5);
const calls = ["increment", "reset", "decrement"];
const results = [];

for (let call of calls) {
  results.push(counter[call]());
}

console.log(results);
