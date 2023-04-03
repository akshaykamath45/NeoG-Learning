const width="200px";
const height="200px";
const link="https://picsum.photos/200"

function ImageCard({width,height,imageSource}){
  return(
    <div>
      <img src={imageSource} style={{width:width,height:height}} alt="random-img"/>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <ImageCard width={width} height={height} imageSource={link}/>
    </div>
  );
}