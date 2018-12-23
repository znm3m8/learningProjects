let maxProd = 0;

for (i = 1; i < 1000; i++) {
  for (j = 1; j <= i; j++) {
    let prod = i * j;
    let str = prod.toString();
    let palendrome = true;
    for (k = 0; k <= str.length / 2 - 1; k++) {
      if (str[str.length - k - 1] !== str[k]) {
        palendrome = false;
      }
    }
    if (palendrome === true) {
      if (prod > maxProd) {
        maxProd = prod;
      }
    }
  }
}

console.log(maxProd);
