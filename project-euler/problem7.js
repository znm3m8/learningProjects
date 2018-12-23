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

while (true) {
  if (isPrime(testNum)) {
    primes.push(testNum);
    if (testNum > 1e9) {
      console.log(testNum);
    }
  }
  if (testNum % 1000000 === 0) {
    console.log("Checked Primes up to :" + testNum);
  }
  testNum++;
}
