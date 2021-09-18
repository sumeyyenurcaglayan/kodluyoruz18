const araba = {
  color: 0,
  brand: "Renault",
  length: 5.3,
  isDriving: false,
  wheelCount: 4,
  drive: function () {
    this.isDriving = true;
    console.log("I drive!", this.isDriving);
  },
  otherSpec: {
    year: 2016,
  },
};

araba.drive(araba);

araba.brand = "Mercedes";

console.log(araba.brand);
console.log(araba["brand"]);

console.log(araba.color);

console.log(araba?.lights?.light1);

if (araba.lights) {
  console.log(araga.lights.light1);
}

console.log(
  araba.brand == "Mercedes"
    ? console.log("Evet o Mercedes")
    : console.log("Hayır o Renault")
);

delete araba.color;

console.log(araba.color);
