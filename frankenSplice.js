function frankenSplice(arr1, arr2, n) {
  let splicedArr = arr2.slice();

  splicedArr.splice(n, 0, ...arr1);
  return splicedArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice([1, 2, 3, 4], [], 0));
console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);
