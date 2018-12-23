class CalcStorage {
  constructor(x, y, numPaths) {
    this.x = x;
    this.y = y;
    this.numPaths = numPaths;
  }
}

let initial = new CalcStorage(1, 1, 2);
let calculated = [initial];

for (let i = 1; i <= 20; i++) {
  let paths = numPathsTo(i, i);
  console.log(`Grid Size: ${i} \t\tPaths: ${paths}`);
}

function numPathsTo(x, y) {
  if (x === 0 || y === 0) {
    return 1;
  }
  if (x > y) {
    return numPathsTo(y, x);
  }
  for (let i = 0; i < calculated.length; i++) {
    if (calculated[i].x === x && calculated[i].y === y) {
      return calculated[i].numPaths;
    }
  }
  result = numPathsTo(x - 1, y) + numPathsTo(x, y - 1);
  calculated.push(new CalcStorage(x, y, result));
  return result;
}
