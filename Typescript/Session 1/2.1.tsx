import React from "react";
//ex 1
interface Person {
  name: string;
  age: number;
}
const person: Person = {
  name: "Akshay",
  age: 20,
};
console.log(person);

//ex 2
interface Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
  features: string[];
}
const tiago: Car = {
  make: "Tata",
  model: "EV",
  year: 2023,
  isElectric: true,
  features: ["Electric,High Speed,Reliable"],
};
console.log(tiago);

//ex 3
function displayPerson(person: Person): void {
  console.log(`Name:${person.name},Age: ${person.age}`);
}
displayPerson({ name: "Akshay", age: 20 });

//ex4-->tying a funnction using interface,can use arrow syntax
interface MathFunction {
  (a: number, b: number): number;
}
const add: MathFunction = (a, b) => a + b;
console.log(add(2, 4));

//double number
interface DoubleNumber {
  (a: number): number;
}
const givenNumber: DoubleNumber = (a) => a * 2;
console.log(givenNumber(4));

//square
interface Square {
  (a: number): number;
}
const findSquare: Square = (a) => a * a;
console.log(findSquare(4));

//Generics
function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(2));

function findItem<T>(items: T[], item: T): number {
  return items.indexOf(item);
}

console.log(findItem<number>([1, 2, 3, 4, 5], 3));

//returns boolean
function findItem2<T>(items: T[], item: T): boolean {
  if (items.find((element) => element === item)) {
    return true;
  } else {
    return false;
  }
}
console.log(findItem2<number>([1, 2, 3, 4, 5], 3));

//interface with optional properties
interface Book {
  title: string;
  author: string;
  year: number;
  genre?: string;
}
const random1: Book = {
  title: "23i190",
  author: "3ewr",
  year: 123,
};
const random2: Book = {
  title: "23i190",
  author: "3ewr",
  year: 123,
  genre: "rbfd",
};
console.log(random1);
console.log(random2);

export default function App() {
  return <div className="App"></div>;
}
