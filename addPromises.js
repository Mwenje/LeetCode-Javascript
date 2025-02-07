let addTwoPromises = async function (promise1, promise2) {
  const result1 = await promise1;
  const result2 = await promise2;

  return result1 + result2;

  //   const values = await Promise.all([promise1, promise2]);

  //   console.log(values);

  //   return values[0] + values[1];
};

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

// addTwoPromises(promise1, promise2).then((result) => console.log(result));

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then((result) =>
  console.log(result)
);
