function ProductCard({productName,price}){
    return(
      <div>
        <b style={{color:"blue"}}>{productName}</b><br/>
        <i style={{color:"green"}}>{price}</i>
      </div>
    )
  }
  export default function App() {
    return (
      <div className="App">
        <ProductCard productName={"iPhone"} price={"89,999"}/>
      </div>
    );
  }
  