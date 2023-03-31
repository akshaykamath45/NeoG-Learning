const setFontSize = { fontSize: "20px" };
// const firstNumber = 4;
// const secondNumber = 5;

export const SumCard = ({firstNumber,secondNumber}) => {
  return (
    <div>
      <h1 className="app-header" style={{ color: "green" }}>
        Sum of Two Numbers
      </h1>
      <div className="app-body">
        <p style={setFontSize}>First Number :{firstNumber}</p>
        <p style={setFontSize}>Second Number :{secondNumber}</p>
        <p style={setFontSize}>Sum: {firstNumber + secondNumber}</p>
      </div>
    </div>
  );
};

// <SumCard firstNumber={4} secondNumber={5} />