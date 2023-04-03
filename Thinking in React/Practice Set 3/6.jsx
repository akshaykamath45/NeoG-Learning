const bouquet = [
    {
      id: 1,
      flowers: ['rose', 'lily', 'marigold'],
      totalFlowers: 9,
      price: 1400,
    },
    {
      id: 2,
      flowers: ['snapdragon', 'sunflower'],
      totalFlowers: 10,
      price: 3400,
    },
  ]
  
  function RoseFlower({flowerDetails}){
    return(
      <div>
        <ul>
          {
            flowerDetails.map(({id,flowers,totalFlowers,price})=>
          //  flowers.map((ele)=>ele).filter((ele)=>ele==="rose")?
            flowers.includes("rose")?
            // flowers.filter((f) => f === "rose")?
            <li key={id}>
              Price of Boquet with roses : {price}
            </li>
            : " "
            ) 
          }
        </ul>
      </div>
    )
  }
  
  export default function App() {
    return (
      <div className="App">
        <RoseFlower flowerDetails={bouquet}/>
      </div>
    );
  }
  