import { useState } from "react";

const heading = 'About Me'
const name = 'Akshay' 
const learning = 'I am learning React JS currently at neoG Camp.'

function About({name,heading,learning}){
  const [info,setInfo]=useState(" ")
  function knowMore(){
    setInfo(learning);
  }
  return(
    <div>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={knowMore}>Know More</button>
      <p>{info}</p>
    </div>
  )
}
export default function App() {
  return (
    <div className="App">
      <About name={name} heading={heading} learning={learning}/>
    </div>
  );
}
