import "./styles.css";
import React from 'react'
//ex01 : object types

//ex01.1
let book: {
  title: string;
  author: string;
  pages: number;
  isAvailable: boolean;
} = {
  title: "Harry Potter",
  author: "JK Rowling",
  pages: 465,
  isAvailable: true,
};
console.log(book);

//ex01.2
let movie: {
  title: string;
  director: string;
  releaseYear: number;
  genre: string[];
} = {
  title: "OMG 2",
  director: "Akshay Kumar",
  releaseYear: 2023,
  genre: ["Fiction", "Comedy"],
};
console.log(movie);

//ex02 : intersections

//ex02.1
type Animal = {
  species: string;
  legs: number;
};
type Pet = Animal & {
  owner?: string;
};

const cat: Pet = {
  species: "Cat",
  legs: 4,
  owner: "John",
};
console.log(cat);

//ex02.2
type Character = {
  name: string;
  health: number;
};
type Player = Character & {
  level: number;
  damage: number;
};
type Enemy = Character & {
  level: number;
  damage: number;
};
const player1: Player = {
  name: "Alice",
  health: 78,
  level: 2,
  damage: 47,
};
console.log(player1);

//ex03 : some more objects and arrays

//ex03.1
let userProfile: {
  userName: string;
  age: number;
  friends: string[];
  address: {
    street: string;
    city: string;
  };
  isPremium: boolean;
  ratings: number[];
  latestActivity: string;
} = {
  userName: "akshaykamath45",
  age: 20,
  friends: ["Jay", "Raghav", "Naman", "Rushabh"],
  address: {
    street: "Kandivali",
    city: "Mumbai",
  },
  isPremium: true,
  ratings: [4, 4.2, 3.6],
  latestActivity: "Learning Typescript",
};
console.log(userProfile);

//ex03.2
type Product = {
  name: string;
  price: number;
  quantity: number;
};
const inventory: Product[] = [{ name: "iPhone", price: 119000, quantity: 1 }];
console.log(inventory);

//ex04 : unions

//ex04.1
type Car = {
  kind: "car";
  make: string;
  model: string;
};
type Bicycle = {
  kind: "bicycle";
  brand: string;
};
type Vehicle = Car | Bicycle;
const xuv700: Vehicle = {
  kind: "car",
  make: "Mahindra",
  model: "AX7L",
};
console.log(xuv700);

//ex04.2
type Purchase = {
  kind: "purchase";
  amount: number;
  item: string;
};
type Refund = {
  kind: "refund";
  amount: number;
  reason: string;
};
type Transaction = Purchase | Refund;
const angryCustomer: Transaction = {
  kind: "refund",
  amount: 2500,
  reason: "Wrong item sent ):",
};
console.log(angryCustomer);

//ex04.3
type Image = {
  kind: "image";
  url: string;
  caption: string;
};
type Video = {
  kind: "video";
  url: string;
  duration: number;
};
type Media = Image | Video;
const postVideo: Media = {
  kind: "video",
  url: "https://www.youtube.com/c/MumbikerNikhil/videos",
  duration: 14,
};
console.log(postVideo);

//ex05 : more types
type DynamicArray = (number | string | boolean | object)[];

function toArrayString(arr: DynamicArray): string {
  const arrayContents = arr.map((item) => JSON.stringify(item)).toString();
  return `[${arrayContents}]`;
}

const dynamicArray: DynamicArray = [1, "hello", true, { key: "value" }];
const arrayString = toArrayString(dynamicArray);
console.log(arrayString);
//Expected Output: "[1,\"hello\",true,{\"key\":\"value\"}]"

//ex05.2
let mixedData: (number | string | boolean | object)[] = [
  42,
  "hello",
  true,
  { name: "Alice", age: 30 },
  [1, 2, 3],
  () => "function called",
];
console.log(mixedData);

// function func(){

// }
// console.log(typeof(mixedData))
// console.log(typeof(func))

export default function App() {
  return (
    <div className="App">
      <h2>Typescript Practice Set 2</h2>
    </div>
  );
}
