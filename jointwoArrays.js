/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const combinedArr = arr1.concat(arr2);
  const merged = {};

  combinedArr.forEach((arr) => {
    const id = arr.id;

    if (!merged[id]) {
      merged[id] = { ...arr };
    } else {
      merged[id] = { ...merged[id], ...arr };
    }
  });

  return Object.values(merged);
};

const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

console.log(join(arr1, arr2));
