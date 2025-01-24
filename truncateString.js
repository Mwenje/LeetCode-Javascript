function truncateString(str, num) {
  if (str.length > num) {
    // return str.substring(0, num) + "...";
    return str.slice(0, num) + "...";
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 10));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);
