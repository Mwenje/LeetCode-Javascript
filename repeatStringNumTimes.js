function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  let result = "";

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
  // return num > 0 ? str.repeat(num) : "";
}

console.log(repeatStringNumTimes("abc", 5));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", 1));
