const bouquet = [
    {
      id: 1,
      flowers: ["rose", "lily", "marigold"],
      totalFlowers: 9,
      price: 1400
    },
    {
      id: 2,
      flowers: ["snapdragon", "sunflower"],
      totalFlowers: 10,
      price: 3400
    }
  ];
  
  function FlowerCard({flowerInformation}){
    return(
      <div>
          {
          flowerInformation.map(({id,flowers,totalFlowers,price})=>
            price>2000?
              <ol>
                {
                flowers.map((name)=>
                <li>
                  {name}
                 </li> 
                )
                }
              </ol>
            : " "
          )
        }
      
      </div>
    )
  }
  
  export default function App() {
    return (
      <div className="App">
        <FlowerCard flowerInformation={bouquet}/>
      </div>
    );
  }
  