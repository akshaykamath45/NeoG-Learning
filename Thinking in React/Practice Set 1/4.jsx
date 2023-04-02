
const imageLink =
  'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
const caption = 'Spring Flowers';

function DisplayImageCard({source,caption}){
  return(
    <div>
        <img src={source} alt="flower" style={{width:"250px",height:"200px"}}/>
        <caption style={{alignItems:"center"}}>{caption}</caption>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <DisplayImageCard source={imageLink} caption={caption}/>
    </div>
  );
}
