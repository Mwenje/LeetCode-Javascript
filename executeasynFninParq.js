/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (functions.length === 0) {
      resolve([]);
      return;
    }

    functions.forEach((fn, index) => {
      fn()
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === functions.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

const functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
  //   () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  //   () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  //   () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];

const start = Date.now();

promiseAll(functions)
  .then((result) => {
    console.log({
      t: Date.now() - start,
      resolved: result,
    });
  })
  .catch((error) => {
    console.log({
      t: Date.now() - start,
      rejected: error,
    });
  });
