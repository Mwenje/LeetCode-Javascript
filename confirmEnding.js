function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
  //   return [...str].slice(-1) === target;
  //   return str.endsWith(target);
}

console.log(confirmEnding("Bastian", "a"));
console.log(confirmEnding("Open sesame", "same"));
console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
