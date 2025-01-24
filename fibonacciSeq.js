// f(n)=f(n-1)+f(n-2)

function fibSeq(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}

let fib = fibSeq(20 );
console.log(fib.join(" "));
