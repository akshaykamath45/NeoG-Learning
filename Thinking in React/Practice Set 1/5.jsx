const products = [
    { name: 'Perk', quantity: 10, sales: 7 },
    { name: 'Pepsi', quantity: 10, sales: 20 },
    { name: 'Coke', quantity: 18, sales: 50 },
    { name: 'Maggi', quantity: 41, sales: 22 },
    { name: '5Star', quantity: 7, sales: 9 },
  ]
   
  function ProductInformation({product}){
    return(
      <ul>
        <h1>Product Names</h1>
        {
          product.map(({name})=><li>
            {name}
          </li>)
        }
      </ul>
    )
  }
  export default function App() {
    return (
      <div className="App">
        <ProductInformation product={products}/>
      </div>
    );
  }
  