function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }

  // return num;
  return num * factorialize(num - 1);
}

console.log(factorialize(10));
