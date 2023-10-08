import { useSelector, useDispatch } from "react-redux";
export default function App() {
  let counter = useSelector((state) => state.counter);

  let dispatch = useDispatch();

  let handleClick = (type) => {
    dispatch({ type });
  };

  return (
    <div className="App">
      <div> Counter: {counter} </div>
      <button onClick={(e) => handleClick("add")}> add </button>
      <button onClick={(e) => handleClick("minus")}> minus </button>
    </div>
  );
}
