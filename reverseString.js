const { load } = require("nodemon/lib/rules");

function reverseString(str) {
  //   return str.split("").reverse().join("");
  return [...str].reverse().join("");
}

console.log(reverseString("hello"));
