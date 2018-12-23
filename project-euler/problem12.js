let notFound = true;
let answer = 0;
let tri = 0;
let maxDiv = 1;
let i = 1;

while (notFound) {
  //calculate next triangular number
  tri += i;

  //count divisors
  divisors = countDivisors(tri);
  if (divisors > maxDiv) {
    maxDiv = divisors;
  }

  //check if found
  if (divisors > 500) {
    answer = tri;
    notFound = false;
  }
  if (i % 10000 === 0) {
    console.log(i);
    console.log(maxDiv);
  }
  i++;
}

console.log(answer);

function countDivisors(num) {
  let i = 1;
  divisors = 0;
  while (i <= Math.floor(Math.sqrt(num))) {
    if (num % i === 0) {
      divisors += 2;
    }
    i++;
  }
  return divisors;
}
