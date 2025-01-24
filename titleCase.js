function titleCase(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }

  //   const titleCasedWords = words
  //     .map((word) => {
  //       return word[0].toUpperCase() + word.substring(1).toLowerCase();
  //     })
  //     .join(" ");

  //   return titleCasedWords;
  return words.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
