let primes = [2];
let testNum = 3;

function isPrime(num) {
  let maxFactor = Math.floor(Math.sqrt(num));
  let result = true;
  let i = 0;
  while (primes[i] <= maxFactor) {
    if (num % primes[i] === 0) {
      result = false;
    }
    i++;
  }
  return result;
}

while (primes.length <= 10001) {
  if (isPrime(testNum)) {
    primes.push(testNum);
  }
  testNum++;
}

console.log(primes[10000]);
