import { useState } from "react";

const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'

function Article({title,content}){
  const [articleContent,setArticleContent]=useState(" ");
  function showContent(){
    setArticleContent(content);
  }
  return(
   <div>
        <h1>{title}</h1>
        <button onClick={showContent}>Know More</button>
        <p>{articleContent} </p>
  </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <Article title={title} content={content} />
    </div>
  );
}
