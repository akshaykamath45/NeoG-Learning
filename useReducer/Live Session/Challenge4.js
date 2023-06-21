import "./styles.css";
import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT": {
      return { count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
}
export default function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div className="App">
      <h1>useReducer Counter | {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}
