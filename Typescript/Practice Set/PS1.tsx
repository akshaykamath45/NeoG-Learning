import "./styles.css";
import React from 'react'
//ex 01 : functions

//ex01.1
function convertTemperature(celcius: number): string {
  const fahrenheit = ((9 / 5) * celcius + 32).toFixed(2);
  return `${celcius}°C is ${fahrenheit}°F.`;
}

//ex01.2
function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

//ex 02 : function with two inputs

//ex02.1
function power(base: number, exponent: number): number {
  return base ** exponent;
}

//ex02.2
function gcd(a: number, b: number): number {
  if (b > a) {
    return gcd(b, a);
  }
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

//ex 03 : function with three inputs and return value

//ex03.1
function calculateBMI(weight: number, height: number, unit: string) {
  if (unit === "metric") {
    return (weight / height ** 2).toFixed(4);
  } else if (unit === "imperial") {
    return ((weight * 703) / height ** 2).toFixed(4);
  }
}

//ex03.2
function calculateHypotenuse(a: number, b: number, unit: string) {
  if (unit === "cm") {
    return Math.sqrt(a ** 2 + b ** 2);
  } else if (unit === "in") {
    const inchToCm = 2.54;
    return Math.sqrt((a * inchToCm) ** 2 + (b * inchToCm) ** 2);
  }
}

//ex 04 : function with union types

//ex04.1
let data: string = "ad";
console.log(typeof data);

let data1: string[] = ["adf", "b"];
console.log(typeof data1);
console.log(data1);

function printArrayOrString(data: string[] | string) {
  if (typeof data === "string") {
    console.log(data);
  } else if (typeof data === "object") {
    data.map((element) => console.log(element));
  }
}

printArrayOrString("akshay");
printArrayOrString(["abc", "dsa"]);

//ex04.2
type Car = {
  kind: "Car";
  model: string;
  year: number;
};
type Bike = {
  kind: "Bike";
  model: string;
  year: number;
};

type Vehicle = Car | Bike;

function printVehicleInfo(vehicle: Vehicle) {
  console.log(
    `Model: ${vehicle.model},Year: ${vehicle.year},Type: ${vehicle.kind}`
  );
}
printVehicleInfo({
  model: "Toyota Camry",
  year: 2022,
  kind: "Car",
});

//ex 05 : function with discriminated unions

//ex05.1
type Book = {
  type: string;
  title: string;
  price: number;
};

type Electronic = {
  type: string;
  name: string;
  price: number;
};

type Clothing = {
  type: string;
  description: string;
  price: number;
};

type Product = Book | Electronic | Clothing;

const products: Product[] = [
  { type: "book", title: "The Great Gatsby", price: 10 },
  { type: "electronic", name: "Smartphone", price: 500 },
  { type: "clothing", description: "T-shirt", price: 20 },
];

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((acc, value) => acc + value.price, 0);
}

//ex05.2
type Transaction = {
  type: string;
  amount: number;
};
const transactions: Transaction[] = [
  { type: "deposit", amount: 100 },
  { type: "withdrawal", amount: 50 },
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 30 },
];

function calculateBalance(transactions: Transaction[]): number {
  return transactions.reduce(
    (acc, value) =>
      value.type === "deposit" ? acc + value.amount : acc - value.amount,
    0
  );
}
console.log(calculateBalance(transactions));

export default function App() {
  return (
    <div className="App">
      <h1>Ex 1</h1>
      <h2>{convertTemperature(37)}</h2>
      <h2>Factorial of 4 is {factorial(4)}</h2>

      <h1>Ex 2</h1>
      <h2>Power of 2 raise to 3 is {power(2, 3)}</h2>
      <h2>GCD of 5 and 10 is {gcd(5, 10)}</h2>

      <h1>Ex 3</h1>
      <h2>
        BMI for weight 92 and height 184 in metric is{" "}
        {calculateBMI(92, 185, "metric")}
      </h2>
      <h2>
        BMI for weight 92 and height 184 in imperial is{" "}
        {calculateBMI(92, 185, "imperial")}
      </h2>
      <h2>
        Hypotenuse for a=3 and b=4 in cm is {calculateHypotenuse(3, 4, "cm")} cm
      </h2>
      <h2>
        Hypotenuse for a=3 and b=4 in inches is{" "}
        {calculateHypotenuse(3, 4, "in")} inches
      </h2>

      <h1>Ex 4</h1>

      <h1>Ex 5</h1>
      <h2>Total Price is {calculateTotalPrice(products)}</h2>
      <h2>Final Balance is {calculateBalance(transactions)}</h2>
    </div>
  );
}
