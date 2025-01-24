function findLongestWordLength(str) {
  let longestWord = "";
  const splitedWords = str.split(" ");

  for (let i = 0; i < splitedWords.length; i++) {
    if (splitedWords[i].length > longestWord.length) {
      longestWord = splitedWords[i];
    }
  }

  return longestWord.length;
}

console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);
