const backgroundColor = 'lightgreen'
const color = 'darkgreen'
const borderRadius = '5px'
const padding = '10px'

function ButtonComponent({bg,clr,borderRadius,pdng}){
  return(
   <div>
     <button style={{backgroundColor:bg,color:clr,borderRadius:borderRadius,padding:pdng}}>Start</button>
   </div>
  )
}
export default function App() {
  return (
    <div className="App">
        <ButtonComponent bg={backgroundColor} clr={color} borderRadius={borderRadius} pdng={padding}/>
    </div>
  );
}



// const backgroundColor = 'lightgreen'
// const color = 'darkgreen'
// const borderRadius = '5px'
// const padding = '10px'

// function ButtonComponent(){
//   return(
//    <div>
//      <button style={{backgroundColor:backgroundColor,color:color,borderRadius:borderRadius,padding:padding}}>Start</button>
//    </div>
//   )
// }
// export default function App() {
//   return (
//     <div className="App">
//         <ButtonComponent/>
//     </div>
//   );
// }