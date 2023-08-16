import "./styles.css";
import { useReducer } from "react";

//based on action,we increment or decrement the state
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };

    case "INCREMENT_BY_5":
      return { count: state.count + 5 };
    case "INCREMENT_BY_10":
      return { count: state.count + 10 };
    case "DECREMENT_BY_5":
      return { count: state.count - 5 };
    case "DECREMENT_BY_10":
      return { count: state.count - 10 };

    default:
      return state;
  }
};

const counterReducer2 = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };

    default:
      return state;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(counterReducer2, { count: 0 });

  /*Initial state=>{count:0} */
  //dispath function will pass the value or the action
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        +10
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
        -5
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT_BY_10", payload: 10 })}
      >
        -10
      </button>
    </div>
  );
}
