function Greeting({name}){
    return(
      <div>
        Hello,{name}!
      </div>
    )
  }
  
  export default function App() {
    return (
      <div className="App">
        <h1 className="app-header">tanaypratap's box</h1>
        <Greeting name={"Akshay"}/>
      </div>
    );
  }
  