import { useState } from "react";
const vegetables = [
    {
      id: 1,
      name: 'Carrots',
      pickDate: '2023-03-25',
    },
    {
      id: 2,
      name: 'Broccoli',
      pickDate: '2023-03-30',
    },
    {
      id: 3,
      name: 'Peppers',
      pickDate: '2023-03-25',
    },
    {
      id: 4,
      name: 'Tomatoes',
      pickDate: '2023-03-27',
    },
    {
      id: 5,
      name: 'Ladies Finger',
      pickDate: '2023-03-30',
    },
  ]
  
  function VegetableDetails(){
    const [currentColor,setCurrentColor]=useState("white");
  
    function highlightFreshVegetables(){
     const freshVegtables=vegetables.filter(({pickDate})=>pickDate==="2023-03-30");
     if(freshVegtables){
       setCurrentColor("green")
     }
     else{
       setCurrentColor("white")
     }
     return currentColor;
    }
    return(
      <div>
        <ol>
          {
            vegetables.map(({id,name,pickDate})=>
            <li style={{color:highlightFreshVegetables}}>
              Name : {name} <br/>
              Pick Date : {pickDate}
            </li>  
            
            )
            
          }
          <button onClick={highlightFreshVegetables}>Highlight Fresh Vegetables</button>
        </ol>
  
      </div>
    )
  }
  export default function App() {
    return (
      <div className="App">
        <VegetableDetails/>
      </div>
    );
  }
  