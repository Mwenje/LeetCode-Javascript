// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

const debounce = function (fn, t) {
  let timer;

  return function (...args) {
    console.log(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

function toDebounceFn(input) {
  console.log(
    `Function called with input: ${input} at time ${Date.now() - startTime}ms`
  );
}

const debouncedFn = debounce(toDebounceFn, 50);

const calls = [
  { t: 50, inputs: [1] },
  { t: 75, inputs: [2] },
];

const startTime = Date.now();

for (const call of calls) {
  setTimeout(() => {
    console.log(
      `Calling debouncedFn with ${call.inputs} at ${Date.now() - startTime}ms`
    );
    debouncedFn(...call.inputs);
  }),
    call.t;
}
