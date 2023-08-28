import "./styles.css";
import React from "react"
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
type quizChecker = (quizQuestion: QuizQuestion, userAnswer: number) => boolean;

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
const numbers = [1, 2, 3, 4, 5]; // number[] == T
console.log(mapArray(numbers, doubleToString));

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
export default function App() {
  return <div className="App"></div>;
}
