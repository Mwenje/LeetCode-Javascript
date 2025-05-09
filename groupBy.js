/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, item) => {
    const key = fn(item);
    console.log(acc[key]);

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);

    return acc;
  }, {});
};

const array1 = [{ id: "1" }, { id: "1" }, { id: "2" }];

const array2 = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
  [2, 4, 6],
];

array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

fn1 = function (list) {
  return String(list[0]);
};

fn2 = function (item) {
  return item.id;
};

fn3 = function (n) {
  return String(n > 5);
};

const grouped1 = array3.groupBy(fn3);
console.log(grouped1);
