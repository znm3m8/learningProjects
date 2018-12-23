let sumOfSquares = 0;
let squareOfSum;
let sum = 0;
let difference;

for (i = 1; i <= 100; i++) {
  sumOfSquares += i * i;
  sum += i;
}

squareOfSum = sum * sum;
difference = squareOfSum - sumOfSquares;
console.log(difference);
