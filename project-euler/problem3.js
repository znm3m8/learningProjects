let num = 600851475143;
let factors = [];
let i = 2;

while (num !== 1) {
  if (num % i === 0) {
    factors.push(i);
    num /= i;
  }
  i++;
}

console.log(factors);
