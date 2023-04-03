const cars = [
    {
      id: 1,
      name: 'supra',
      price: 500000,
      category: 'sports',
    },
    {
      id: 2,
      name: 'A5',
      price: 700000,
      category: 'luxury',
    },
    {
      id: 3,
      name: 'huyara',
      price: 1500000,
      category: 'sports',
    },
    {
      id: 4,
      name: 'agera R',
      price: 3500000,
      category: 'sports',
    },
  ]
  
  function CarCategories({carList}){
    let countSports=0;
    let countLuxury=0;
    carList.map(({category})=>
        category==="sports" ?  countSports++ : countLuxury++
      )
    return(
      <div>
        luxury : {countLuxury}<br/>
        sports : {countSports}
      </div>
    )
  }
  
  export default function App() {
    return (
      <div className="App">
        <CarCategories carList={cars}/>
      </div>
    );
  }