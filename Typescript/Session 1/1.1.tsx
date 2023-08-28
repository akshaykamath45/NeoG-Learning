import React from "react";
export default function App() {
  // let variableName: variableType
  let myNumber: number = 42;

  let myName: string = "Akshay";

  let isStudent: boolean = true;

  let myData: null = null;

  // let numbersArray:arrayType[1,2,3,4,5]
  let numbers: number[] = [1, 2, 3, 4, 5];
  numbers.push(6);
  console.log(numbers);
  let fruits: string[] = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  fruits.push("Strawberry");
  console.log(fruits);

  // let objectName: {
  //   propertyName1: propertyType1
  //   propertyName2: propertyType2
  // } = { propertyName1: propertyValue, propertyName2: propertyValue }

  // propertyType could be anything from variableType
  let person: { name: string; age: number } = { name: "Akshay", age: 19 };
  console.log(person);
  let car: { make: string; year: number } = { make: "XUV700", year: 2021 };
  console.log(car);
  let student: { name: string; age: number; isEnrolled: boolean } = {
    name: "Akshay",
    age: 20,
    isEnrolled: true,
  };
  console.log(student);

  //challenge 5
  let personalDetails: {
    name: string;
    age: number;
    hobbies: string[];
    address: { street: string; city: string };
    isStudent: boolean;
    scores: number[];
    extraInfo: null;
  } = {
    name: "Akshay",
    age: 20,
    hobbies: ["Playing Cricket", "Coding"],
    address: { street: "Kandivali", city: "Mumbai" },
    isStudent: true,
    scores: [8.25, 9.32, 9.09, 8.74],
    extraInfo: null,
  };
  console.log(personalDetails);

  // type TypeA = { propA: number, propB: string };

  // type TypeB = TypeA & {
  // 	propC: string
  // };

  // type TypeC = TypeA & {
  // 	propD: string
  // };

  //intersection means &,which will include both
  type Person = { name: string; age: number };
  type Student = Person & { studentId: string };
  type Teacher = Person & { subject: string };

  const akshay: Person = { name: "Akshay", age: 20 };
  console.log(akshay);
  const rohit: Student = { name: "Rohit", age: 45, studentId: "rgnfdmbv" };
  console.log(rohit);

  //union means | ,which may include any of the properties,not necessary,all or both to be included.
  let id: string | number = "tnewjksdg";

  //union of arrays
  let numberOrStringArray: (string | number)[] = [1, 2, 3, "we"];

  let mixedArray: (number | string | boolean)[] = [1, 2, "three", "four", true];

  //Type inference is when typescript automatically figures out the type of a variable based on its initial value.
  let isSmart = "boolean";
  // isSmart=true
  isSmart = "yes";
  console.log(isSmart);
  return (
    <div className="App">
      <h2> {myNumber}</h2>
      <h2> {myName}</h2>
      <h2> {isStudent ? "Yes" : "No"}</h2>
      <h2>{myData}</h2>
    </div>
  );
}
