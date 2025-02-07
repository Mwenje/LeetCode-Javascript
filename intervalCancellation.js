let cancellable = function (fn, args, t) {
  let result = [];
  const startTime = Date.now();
  //   // Initial execution of the function immediately
  //   let currentTime = Date.now();
  //   result.push({
  //     time: currentTime - startTime,
  //     returned: fn(...args),
  //   });
  //   // Start periodic execution using setInterval
  //   const intervalId = setInterval(() => {
  //     currentTime = Date.now();
  //     result.push({
  //       time: currentTime - startTime,
  //       returned: fn(...args),
  //     });
  //   }, t);
  //   console.log(result);
  //   // Return cancel function that clears the interval after cancelTimeMs
  //   return function cancelFn() {
  //     // Capture the time of cancellation
  //     let cancelTime = Date.now();
  //     console.log(`Cancelled at ${cancelTime - startTime}ms`);
  //     clearInterval(intervalId);
  //   };

  let currentTime = Date.now();
  result.push({
    time: currentTime - startTime,
    returned: fn(...args),
  });

  const timer = setInterval(() => fn(...args), t);

  const cancelFn = () => {
    let cancelTime = Date.now();
    clearInterval(timer);
    console.log(`Cancelled at ${cancelTime - startTime}ms`);
  };

  return cancelFn;
};

// const fn = (x) => x * 2;
// const args = [4];
// const t = 35;
// const cancelTimeMs = 190;

// const cancelFn = cancellable(fn, args, t);
// setTimeout(cancelFn, cancelTimeMs); // Cancel after 190ms

// const fn = (x1, x2) => x1 * x2;
// const args = [2, 5];
// const t = 30;
// const cancelTimeMs = 165;

// const cancelFn = cancellable(fn, args, t);
// setTimeout(cancelFn, cancelTimeMs);

const validateEmail = (email) => {
  console.log(`Validating email: ${email}`);
  // Simulate an email validation
  const isValid = email.includes("@");
  console.log(isValid ? "Valid" : "Invalid");
};

const cancelValidation = cancellable(validateEmail, ["test@example.com"], 500);
setTimeout(cancelValidation, 2000);
