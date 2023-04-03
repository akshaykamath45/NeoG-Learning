const products = [
    {
      id: 1,
      name: 'keyboard',
      description: 'Logitech Mechanical Keyboard',
      price: 2000,
    },
    { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
    {
      id: 3,
      name: 'speakers',
      description: 'Bose L1 Pro32 Portable',
      price: 256000,
    },
    { id: 4, name: 'mobile', description: 'iPhone 13', price: 61000 },
    {
      id: 5,
      name: 'monitor',
      description: 'Lenovo 32-inch display Monitor',
      price: 10000,
    },
    { id: 6, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
    {
      id: 7,
      name: 'speakers',
      description: 'Creative Desktop Speakers',
      price: 5000,
    },
    {
      id: 8,
      name: 'headphones',
      description: 'Sony over-the-ear wired Headphones with mic',
      price: 1500,
    },
    { id: 9, name: 'mobile', description: 'iPhone 12', price: 90000 },
  ]

function MyGadgets({gadgetInformation}){
    const [currentBackgroundColor,setCurrentBackgroundColor]=useState("white");
    // function highlightExpensiveGadgets(price){
    //   if(price>50000){
    //     setCurrentBackgroundColor("lightgreen")
    //   }
    // }
    return(
      <div>
        <ol>
          {
            gadgetInformation.map(({name,description,price})=>
              <li style={{backgroundColor:currentBackgroundColor}}>
                {name}<br/>
                {description}<br/>
                {price}<br/>
               </li> 
              )
          }
        </ol>
        <button onClick={({price})=>price>50000? setCurrentBackgroundColor("lightgreen"):"white"}>Highlight Expensive Gadgets</button>
      </div>
    )
  }

  export default function App() {
    return (
      <div className="App">
        {/* <Greeting name={"Akshay"} />
        <ProductCard productName={"iPhone"} price={"89,999"} />
        <UserProfile userInfo={userData}/>
        <Gadgets productInformation={products}/>
        <Phones productInformation={products}/> */}
        <Article title={title} content={content} />
        <About name={name} heading={heading} learning={learning} />
        <MyGadgets gadgetInformation={products}/>
      </div>
    );
  }
  