import React from "react";

export default function App() {
  //basically we have 4 types
  //Number
  //String
  //Boolean
  //Null
  let myNumber: number = 42;
  console.log(myNumber);

  let myName: string = "Akshay";
  console.log(myName);

  let isStudent: boolean = true;
  console.log(isStudent);

  let myData: null = null;
  console.log(myData);

  //playing with arrays
  let numbers: number[] = [1, 2, 3, 4, 5];
  console.log(numbers);

  let fruits: string[] = ["stawberry", "mango", "apple"];
  console.log(fruits);

  //playing with objects
  let person: {
    name: string;
    age: number;
  } = {
    name: "Akshay",
    age: 20,
  };
  console.log(person);

  let car: {
    make: string;
    year: number;
  } = {
    make: "Mahindra",
    year: 2021,
  };
  console.log(car);

  let student: {
    name: string;
    age: number;
    isEnrolled: boolean;
  } = {
    name: "Akshay",
    age: 20,
    isEnrolled: true,
  };
  console.log(student);

  let personDetail: {
    name: string;
    age: number;
    hobbies: string[];
    address: {
      street: string;
      city: string;
    };
    isStudent: boolean;
    scores: number[];
    extraInfo: null;
  } = {
    name: "Akshay",
    age: 20,
    hobbies: ["cricket", "music", "programming"],
    address: {
      street: "Kandivali",
      city: "Mumbai",
    },
    isStudent: true,
    scores: [20, 24, 23],
    extraInfo: null,
  };
  console.log(personDetail);

  //type,unions,intersesction
  //intersction &
  //union |

  //intersection
  type Person = {
    name: string;
    age: number;
  };
  type Student = Person & {
    studentId: string;
  };
  type Teacher = Person & {
    subject: string;
  };

  let meera: Teacher = {
    name: "Meera",
    age: 38,
    subject: "Data Warehouse",
  };
  console.log(meera);

  //union

  //for variable
  let id: string | number = 1234;
  console.log(id);

  //for array
  let numberOrStringArray: (number | string)[] = ["Hello", 1, 2, "World"];
  console.log(numberOrStringArray);

  let mixedArray: (number | string | boolean)[] = [
    "Namaste",
    true,
    4,
    5,
    "Duniya",
    false,
  ];
  console.log(mixedArray);

  //type inference
  //type script would automatically assign the type based on inital value
  let myInferredNumber = 10; //infers the type as number
//   myInferredNumber = "dsf";
  console.log(myInferredNumber);

  //1.2

  //functions
  function greet(name: string): void {
    console.log(`Hello,${name}`);
  }
  greet("Akshay");

  function addNumbers(a: number, b: number): void {
    const sum = a + b;
    console.log(`Sum is : ${sum}`);
  }
  addNumbers(4, 5);

  function calculateVolume(
    length: number,
    width: number,
    height: number
  ): number {
    const volume = length * width * height;
    console.log(`Volume is ${volume}`);
    return volume;
  }
  calculateVolume(3, 4, 5);

  //function with union types

  //trick
  type Info = string | number; //pure TS
  function printInfo(info: string | number): void {
    console.log(`printing info,${info}`);
  }
  printInfo("hello");

  //function with discriminated union-should have 1 common key in both for discrimination
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    length: number;
    width: number;
  };
  type Area = Circle | Rectangle;
  function getArea(area: Area) {
    if (area.shape === "circle") {
      return Math.PI * area.radius ** 2;
    } else {
      return area.length * area.width;
    }
  }
  getArea({
    shape: "circle",
    radius: 4,
  });
  getArea({
    shape: "rectangle",
    length: 4,
    width: 4,
  });

  //function convert object types

  type Person1 = {
    name: string;
    age: number;
  };
  type Student1 = Person1 & {
    studentId: string;
  };

  function convertPersonToStudent(person: Person1): Student1 {
    return { ...person, studentId: "421" };
  }
  console.log(
    convertPersonToStudent({
      name: "Akshay",
      age: 20,
    })
  );

  //function that converts array types
  function doubleNumbers(arr: number[]): number[] {
    return arr.map((num) => num * 2);
  }
  console.log(doubleNumbers([1, 2, 3, 4]));

  //TS2.1 CW

  //ex01
  interface Person2 {
    name: string;
    age: number;
  }
  const person2: Person2 = {
    name: "Alice",
    age: 30,
  };
  console.log(person2);

  //ex02
  interface Car {
    make: string;
    model: string;
    year: number;
    isElectric: boolean;
    features: string[];
  }

  //ex03
  function displayPerson(person: Person2) {
    console.log(`Name:${person.name},Age:${person.age}`);
  }
  console.log(
    displayPerson({
      name: "Akshay",
      age: 21,
    })
  );

  //ex04  function signature as interface
  interface MathFunction {
    (a: number, b: number): number;
  }
  const add: MathFunction = (a, b) => a + b;
  console.log(add(2, 3));

  const double: MathFunction = (a) => a * 2;
  const square: MathFunction = (a) => a ** 2;

//   console.log(double(2)); //will expect 2 arguments
//   console.log(square(3)); //will expect 2 arguments

  //ex05 simple function with generics
  function identity<T>(value: T): T {
    return value;
  }
  console.log(identity<number>(22));

  //function exercise with generics
  function findItem<T>(items: T[], item: T): number {
    return items.indexOf(item);
  }
  const items = [1, 2, 3, 4, 5]; // number[]
  const itemToBeFound = 3; // string

  //TS2.2 CW
  //ex1 - defining type for array of objects
  type QuizQuestion = {
    question: string;
    options: string[];
    correctOption: number;
  };

  const quizQuestions: QuizQuestion[] = [
    {
      question: "What is the capital of France ? ",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      correctOption: 0,
    },
  ];

  //ex2 define type for function inputs
  type quizChecker = (
    quizQuestion: QuizQuestion,
    userAnswer: number
  ) => boolean;

  const quizAnswer: quizChecker = (quizQuestion, userAnswer) => {
    return userAnswer === quizQuestion.correctOption;
  };
  console.log(
    quizAnswer(
      {
        question: "What is the capital of France ? ",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctOption: 0,
      },
      0
    )
  );

  //ex03 type for filtering array
  type filterFunction<T> = (arr: T[], predicate: (value: T) => boolean) => T[];
  const filterArray: filterFunction<number> = (arr, predicate) => {
    return arr.filter(predicate);
  };
  const isEven = (num: number) => num % 2 === 0;
  const numbers2 = [1, 2, 3, 4, 5, 6];
  console.log(filterArray(numbers2, isEven));

  // /ex04 type for map array
  // type mapFunction<T>=(arr:T[],mapper:(value:T)=>T)=>T[]

  // const mapArray:mapFunction<number>=(arr,mapper)=>{
  //   return arr.map(mapper)
  // }
  // const doubleToString = (num: number) => (num * 2).toString();
  // const numbers = [1, 2, 3, 4, 5]; // number[] == T
  // console.log(mapArray(numbers, doubleToString));
  type mapFunction<T, R> = (arr: T[], mapper: (value: T) => R) => R[];

  const mapArray: mapFunction<number, string> = (arr, mapper) => {
    return arr.map(mapper);
  };
  const doubleToString = (num: number) => (num * 2).toString();
  const numbers5 = [1, 2, 3, 4, 5]; // number[] == T
  console.log(mapArray(numbers5, doubleToString));

  //ex05 type for reducing array
  type reducerFunction<T, R> = (
    arr: T[],
    accumulator: (acc: R, value: T) => R,
    inital: R
  ) => R;
  const reduceArray: reducerFunction<number, number> = (
    arr,
    accumulator,
    intial
  ) => {
    return arr.reduce(accumulator, intial);
  };
  const sumAccumulator = (acc: number, num: number) => acc + num;
  const numbers4 = [1, 2, 3, 4, 5];
  console.log(reduceArray(numbers4, sumAccumulator, 0)); // Output: 15

  console.log(findItem<number>(items, itemToBeFound));
  return (
    <div className="App">
      <h2>{calculateVolume(3, 4, 5)}</h2>
      <h2>
        {getArea({
          shape: "circle",
          radius: 10,
        })}
      </h2>
      <h2>
        {getArea({
          shape: "rectangle",
          length: 4,
          width: 4,
        })}
      </h2>
    </div>
  );
}
