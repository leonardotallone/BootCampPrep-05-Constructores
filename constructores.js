function CalculadoraNPI() {
  this.numeros = [];
  this.agregar = function (num) {
    this.numeros.push(num);
  };
  this.multiplicar = function () {
    if (this.numeros < 2) {
      throw "La calculadoraNPI necesita por lo menos 2 números";
    } else {
      let num1 = this.numeros.pop();
      let num2 = this.numeros.pop();
      this.numeros.push(num2 * num1);
    }
  };
}
CalculadoraNPI.prototype.sumar = function () {
  if (this.numeros < 2) {
    throw "La calculadoraNPI necesita por lo menos 2 números";
  } else {
    let num1 = this.numeros.pop();
    let num2 = this.numeros.pop();
    this.numeros.push(num1 + num2);
  }
};
CalculadoraNPI.prototype.valor = function () {
  return this.numeros[this.numeros.length - 1];
};
CalculadoraNPI.prototype.restar = function () {
  if (this.numeros < 2) {
    throw "La calculadoraNPI necesita por lo menos 2 números";
  } else {
    let num1 = this.numeros.pop();
    let num2 = this.numeros.pop();
    this.numeros.push(num2 - num1);
  }
};
CalculadoraNPI.prototype.dividir = function () {
  if (this.numeros < 2) {
    throw "La calculadoraNPI necesita por lo menos 2 números";
  } else {
    let num1 = this.numeros.pop();
    let num2 = this.numeros.pop();
    this.numeros.push(num2 / num1);
  }
};

/*
function CalculadoraNPI() {
  this.numbers = [];
  this.result = 0;
}
CalculadoraNPI.prototype.agregar = function (num) {
  //pusheo los valores ingresados al array
  this.numbers.push(num);
};
// [2,3,4]
CalculadoraNPI.prototype.sumar = function () {
  //Suma de dos valores
  if (this.numbers.length < 2) {
    throw "La calculadoraNPI necesita por lo menos 2 números";
  } else if (this.numbers.length === 2) {
    this.result = this.numbers[0] + this.numbers[1];
  } else {
    this.result =
      this.numbers[this.numbers.length - 2] +
      this.numbers[this.numbers.length - 1];
    this.numbers.pop();
    // [2,3]
    this.numbers[this.numbers.length - 1] = this.result;
  }
};
CalculadoraNPI.prototype.restar = function () {
  if (this.numbers.length < 2) {
    throw "La calculadoraNPI necesita por lo menos 2 números";
  } else if (this.numbers.length === 2) {
    this.result = this.numbers[0] - this.numbers[1];
  } else {
    this.result =
      this.numbers[this.numbers.length - 2] -
      this.numbers[this.numbers.length - 1];
    this.numbers.pop();
    this.numbers[this.numbers.length - 1] = this.result;
  }
};

CalculadoraNPI.prototype.dividir = function () {
  if (this.numbers.length < 2) {
    throw "La calculadoraNPI necesita por lo menos 2 números";
  } else if (this.numbers.length === 2) {
    this.result = this.numbers[0] / this.numbers[1];
  } else {
    this.result =
      this.numbers[this.numbers.length - 2] /
      this.numbers[this.numbers.length - 1];
    this.numbers.pop();
    this.numbers[this.numbers.length - 1] = this.result;
  }
};

CalculadoraNPI.prototype.multiplicar = function () {
  if (this.numbers.length < 2) {
    throw "La calculadoraNPI necesita por lo menos 2 números";
  } else if (this.numbers.length === 2) {
    this.result = this.numbers[0] * this.numbers[1];
  } else {
    this.result =
      this.numbers[this.numbers.length - 2] *
      this.numbers[this.numbers.length - 1];
    this.numbers.pop();
    this.numbers[this.numbers.length - 1] = this.result;
  }
};

CalculadoraNPI.prototype.valor = function () {
  return this.result;
};
*/
