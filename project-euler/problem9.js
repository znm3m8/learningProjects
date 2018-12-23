for (i = 1; i < 1000; i++) {
  for (j = 1; j < i; j++) {
    if (Math.floor(Math.sqrt(i * i + j * j)) === Math.sqrt(i * i + j * j)) {
      if (i + j + Math.sqrt(i * i + j * j) === 1000) {
        console.log(i * j * Math.sqrt(i * i + j * j));
      }
    }
  }
}
