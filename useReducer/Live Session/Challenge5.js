import "./styles.css";
import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };

    case "DECREMENT": {
      return { count: state.count - action.payload };
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
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        +10
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
        -5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        -10
      </button>
    </div>
  );
}
