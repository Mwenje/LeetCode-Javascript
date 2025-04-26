let timeLimit = function (fn, t) {
  return async function (...args) {
    const timeOutPromise = new Promise((_, reject) =>
      setTimeout(() => reject("Time Limit Exceeded"), t)
    );

    const resultPromise = Promise.resolve(fn(...args));

    try {
      const result = await Promise.race([timeOutPromise, resultPromise]);

      return result;
    } catch (error) {
      throw error;
    }
  };
};

async function run() {
  const fn = async (n) => {
    await new Promise((res) => setTimeout(res, 160));
    return n * n;
  };

  const fn1 = async (a, b) => {
    await new Promise((res) => setTimeout(res, 120));
    return a + b;
  };

  const fn2 = async () => {
    throw "Error";
  };

  const timeLimitFn = timeLimit(fn, 150);
  //   const inputs = [5];
  const inputs = [5, 10];

  const start = performance.now();

  let result;

  try {
    const res = await timeLimitFn(...inputs); // `await` can be used here because it's inside an async function
    result = { resolved: res, time: Math.floor(performance.now() - start) };
  } catch (err) {
    result = { rejected: err, time: Math.floor(performance.now() - start) };
  }

  console.log(result);
}

run(); // Call the async function
