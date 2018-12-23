let primes = [2];
let testNum = 3;
let sum = 2;

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

while (testNum < 2e6) {
  if (isPrime(testNum)) {
    primes.push(testNum);
    sum += testNum;
  }
  testNum++;
}

console.log(sum);
