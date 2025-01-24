function largestOfFour(arr) {
  const largestArr = [];

  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      let subArrNum = arr[i][j];

      if (subArrNum > largest) {
        largest = subArrNum;
      }
    }

    largestArr.push(largest);
  }

  return largestArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3, 56666],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
