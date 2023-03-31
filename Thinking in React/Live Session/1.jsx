const setFontSize={fontSize:"20px"}

export const SumCard = () => {
  return (
    <div>
      <h1 className="app-header" style={{color:"green"}}>Sum of Two Numbers</h1>
      <div className="app-body">
        <p style={setFontSize}>First Number :5</p>
        <p style={setFontSize}>Second Number :4</p>
        <p style={setFontSize}>Sum: 9</p>
      </div>
    </div>
  );
};
