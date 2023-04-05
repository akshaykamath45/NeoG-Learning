function MoveFontSize() {
  const [currentFontSize, setCurrentFontSize] = useState(18);
  function increaseFontSize() {
    setCurrentFontSize(currentFontSize + 1);
  }
  function decreaseFontSize() {
    setCurrentFontSize(currentFontSize - 1);
  }
  return (
    <div>
      <h1 style={{ fontSize: `${currentFontSize}px` }}>Welcome</h1>
      <button onClick={increaseFontSize}>+</button>
      <button onClick={decreaseFontSize}>-</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <MoveFontSize />
    </div>
  );
}
