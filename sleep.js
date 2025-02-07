async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
console.log(t);

sleep(5000).then(() => {
  console.log(Date.now() - t);
});
