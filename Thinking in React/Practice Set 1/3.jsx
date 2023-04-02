const items = ['pen', 'pencil', 'ruler', 'eraser']

function ProductCard({productDetail,productHeader}){
  return(
    <div style={{border:"2px solid black"}}>
      <h1>{productHeader}</h1>
      {
        productDetail.map(item=>
          <h3 style={{border:"1px solid black",padding:"0.5px"}}>{item}</h3>
          )
      }
    </div>
    
  )
}
export default function App() {
  return (
    <div>
      <ProductCard productDetail={items} productHeader="Stationery Items"/>
    </div>
  );
}