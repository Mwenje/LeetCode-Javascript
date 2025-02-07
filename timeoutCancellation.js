let cancellable = function (fn, args, t) {
  let timeOutId = setTimeout(() => {
    const startTime = Date.now();
    const result = fn(...args);

    console.log([
      {
        time: Date.now() - startTime,
        result: result,
      },
    ]);
  }, t);

  //   const timeoutId = setTimeout(function () {
  //     fn.apply(null, args);
  //   }, t);

  //   console.log(timeOutId);

  return function cancelFn() {
    clearTimeout(timeOutId);
  };
};

// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x * 5, [2], 20);

const cancelFn = cancellable((x) => x ** 2, [2], 100);
// setTimeout(cancelFn, 50);

// setTimeout(cancelFn, cancelTimeMs);

// const cancelFn = cancellable((x1, x2) => x1 * x2, [2, 4], 30);
setTimeout(cancelFn, 50);
