// const invoices = [{ amount: 500 }, { amount: 1500 }, { amount: 1000 }];
// const totalRevenue = invoices.reduce(
//   (total, invoice) => total + invoice.amount,
//   0
// );

// console.log(totalRevenue);

// const responses = ["yes", "no", "maybe", "yes", "yes", "no", "maybe"];
// const frequency = responses.reduce((acc, respose) => {
//   acc[respose] = (acc[respose] || 0) + 1;
//   return acc;
// }, {});

// console.log(frequency);

// const letters = ["h", "e", "l", "l", "o"];
// const reversedLetters = letters.reduceRight((acc, curr) => acc + curr, "");
// console.log(reversedLetters);

//Nested object
// const keys = ["level1", "level2", "level3", "level4"];
// const nestedObject = keys.reduceRight((acc, key) => ({ [key]: acc }), {});

// console.log(nestedObject);

//Breadcrums generation
// const pathSegments = ["home", "team", "about", "contact"];
// const breadCrumbs = pathSegments.reduceRight((acc, segment) => {
//   acc.push((acc[acc.length - 1] || "") + "/" + segment);
//   return acc;
// }, []);

// console.log(breadCrumbs);

function compose(functions) {
  return (x) => functions.reduceRight((acc, fn) => fn(acc), x);
}

functions1 = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
functions2 = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
functions3 = [];

const fn = compose(functions2);
console.log(fn(42));
