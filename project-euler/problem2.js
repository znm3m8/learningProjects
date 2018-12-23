let sum = 0;
let fib = [0, 1];

while (fib[fib.length - 1] < 4e6) {
  fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
  if (fib[fib.length - 1] % 2 === 0) {
    sum += fib[fib.length - 1];
  }
}

console.log(sum);
