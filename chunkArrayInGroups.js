function chunkArrayInGroups(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    console.log(arr, i);

    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
