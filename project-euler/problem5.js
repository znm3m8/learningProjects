let notFound = true;
let testNum = 1;

//this algorithm sucks should do something with common factors

while (notFound) {
  testNum++;
  let isDivisible = true;
  for (i = 1; i <= 20; i++) {
    if (testNum % i !== 0) {
      isDivisible = false;
    }
  }
  if (testNum % 10000000 === 0) {
    console.log(testNum);
  }
  if (isDivisible) {
    notFound = false;
  }
}

console.log(testNum);
