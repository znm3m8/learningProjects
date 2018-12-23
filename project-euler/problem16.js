class LargeInt {
  constructor(num) {
    if (typeof num === "number") {
      this.number = num.toString();
    } else {
      this.number = num;
    }
  }

  multiplyBy2() {
    let number2 = "";
    let carryFlag = 0;
    let carry = 0;
    let digit = 0;
    this.number = "0" + this.number;
    for (let i = this.number.length - 1; i >= 0; i--) {
      if (parseInt(this.number[i], 10) * 2 + carry > 9) {
        digit = (parseInt(this.number[i], 10) * 2 - 10 + carry).toString();
        carryFlag = 1;
      } else {
        digit = (parseInt(this.number[i], 10) * 2 + carry).toString();
      }
      number2 = digit + number2;

      carry = carryFlag;
      carryFlag = 0;
    }

    while (number2[0] === "0") {
      number2 = number2.substr(1, number2.length);
    }

    let result = new LargeInt(number2);
    return result;
  }
}

let x = new LargeInt("1");
for (let i = 0; i < 1000; i++) {
  x = x.multiplyBy2();
}

let sum = 0;
for (i = 0; i < x.number.length; i++) {
  sum += parseInt(x.number[i], 10);
}
console.log(sum);
