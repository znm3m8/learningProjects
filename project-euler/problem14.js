let maxChainLength = 0;

for (i = 1; i < 1e6; i++) {
  let testNum = i;
  let chain = 1;

  while (testNum !== 1) {
    testNum = collatz(testNum);
    chain++;
  }

  if (chain > maxChainLength) {
    maxChainLength = chain;
    console.log(`Maxium chain: ${maxChainLength}`);
    console.log(`Number: ${i}`);
  }

  i++;
}

function collatz(num) {
  if (num % 2 === 0) {
    return num / 2;
  }
  return 3 * num + 1;
}
