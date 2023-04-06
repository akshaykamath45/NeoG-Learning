import { useState } from "react";

const title = "React is awesome";
const content = "React is a JavaScript library for building user interfaces.";

function Article({ articleTitle, articleContent }) {
  const [showContent, setShowContent] = useState(false);
  function displayContent() {
    setShowContent(!showContent);
  }
  return (
    <>
      <h1>{articleTitle}</h1>
      <button onClick={displayContent}>Know More</button>
      <p>{showContent && articleContent}</p>
    </>
  );
}
export default function App() {
  return (
    <div className="App">
      <Article articleTitle={title} articleContent={content} />
    </div>
  );
}
