import React from "react"


function greet(name: string): void {
  console.log(`Hello ${name}!`);
}
greet("Akshay");

function addNumbers(a: number, b: number): void {
  console.log(a + b);
}
addNumbers(2, 4);

function calculateVolume(
  length: number,
  width: number,
  height: number
): number {
  return length * width * height;
}

function printInfo(info: string | number): void {
  console.log(info);
}
printInfo("Info");
printInfo(45);

// type printInfo1 = { info: string | number };
// const printAkshayInfo1:printInfo1={info:"Akshay"}
// console.log(printAkshayInfo1)

type Info = string | number;
function printInfo1(info: Info): void {
  console.log(info);
}
printInfo1("Akshay");

//Discriminated Union Type : have atleast 1 same key to differentiate

type Circle = {
  kind: "circle"; //Constant value
  radius: number;
};
type Rectangle = {
  kind: "rectangle";
  length: number;
  width: number;
};
type Shape = Circle | Rectangle;
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    console.log(Math.PI * shape.radius ** 2);
  } else {
    console.log(shape.length * shape.width);
  }
}

// const getCircle: Circle = {kind:"circle",radius: 10 };
getArea({ kind: "circle", radius: 10 });

type Person = {
  name: string;
  age: number;
};
type Student = Person & {
  studentId: string;
};

function convertPersonToStudent(person: Person): Student {
  return { ...person, studentId: "S1213" };
}
console.log(convertPersonToStudent({ name: "Akshay", age: 20 }));

function doubleNumbers(numArray: number[]): number[] {
  return numArray.map((num) => num * 2);
}
console.log(doubleNumbers([1, 2, 3, 4]));
export default function App() {
  return (
    <div className="App">
      <h2>Volume is : {calculateVolume(1, 2, 3)}</h2>
    </div>
  );
}
